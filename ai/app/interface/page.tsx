"use client"

import { ChatPage } from '@/components/chatInterface/chatPage';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';

export default function Page() {
    return (
        <SessionAuth>
            <ChatPage />
        </SessionAuth>
    );
}