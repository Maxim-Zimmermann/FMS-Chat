import pino from "pino"

let _logger: pino.Logger | undefined;

export let logger: pino.Logger = new Proxy({} as pino.Logger, {
    get(target, prop) {
        if (!_logger) {
            _logger = pino({ hooks });
        }
        // @ts-ignore
        return _logger[prop];
    }
});

const hooks = {
    streamWrite(s: string) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-API-KEY': process.env.LOGFLARE_API_KEY || ""
            },
            body: `${transformMessage(s)}`
        };

        fetch(`${process.env.LOGFLARE_API_BASE_URL}/logs?source=${process.env.LOGFLARE_SOURCE_TOKEN}`, options)
            .catch(err => console.error(err));
        return s
    }
}

function transformMessage(params: string): string {
    const json = JSON.parse(params);
    if (json.msg && !json.event_message && !json.message) {
        json.event_message = json.msg;
        json.message = json.msg;
        json.metadata = {
            pid: json.pid,
            devMode: process.env.NODE_ENV || "development"
        }
    }
    return JSON.stringify(json);
}

export function info(params: { requestId?: string, userId?: string, service: string, action?: string, resource?: string, decision?: string, ip_address?: string } = { service: "App" }) {
    logger.info({ ...params });
}