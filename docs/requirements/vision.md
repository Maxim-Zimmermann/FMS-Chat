# Vision
## Introduction
The purpose of this document is to collect, analyze, and define the essential requirements and functionalities of the FMS-Chat system. The focus is on the capabilities required by stakeholders and targeted users and the justification of these needs. The details of how the FMS-Chat system meets these requirements are described in the Use Case and Supplementary Specification.

### Purpose
The purpose of this document is to describe the essential requirements of the system from the perspective and in the terms of future users.

### Scope
This vision document refers to the FMS-Chat system being developed by Maxim Zimmermann. The system will allow users to interact with a conversational agent powered by large language models (LLMs) to interact with form data.

### Definitions, Acronyms, and Abbreviations
see [glossary.md](glossary.md)

## Positioning
### Motivation
The motivation behind the FMS-Chat system is to enhance user interaction with form data by leveraging conversational AI capabilities. By integrating LLMs, the system aims to provide a more intuitive and efficient way for users to access and manipulate form information, ultimately improving the overall user experience.
### Problem Statement
- **The Problem**: Users often struggle to interact with complex form data, leading to frustration and inefficiency. Traditional form interfaces can be cumbersome and unintuitive, making it difficult for users to find and manipulate the information they need.
- **Regarding User Needs**: The Stakeholders, that are affected by this problem include end-users who interact with the forms, as well as users with disabilities who may require additional assistance in navigating and completing forms.
- **The Effect**: This problem can result in increased time spent on form completion, a higher likelihood of errors, and ultimately a negative impact on user satisfaction and productivity.
- **A Solution**: The FMS-Chat system aims to address these challenges by providing a more accessible and user-friendly interface for interacting with form data, leveraging the power of conversational AI to streamline the process.

### Positioning
- **For**: The product is primarily aimed at end-users who need to interact with complex form data, including those with disabilities.
- **Who**: These users often find traditional form interfaces challenging and require a more intuitive solution.
- **The Product**: FMS-Chat is a conversational agent that utilizes large language models to facilitate interaction with form data.
- **That**: The system provides a user-friendly interface that allows users to ask questions and manipulate form data through natural language interactions.
- **Unlike**: Traditional form interfaces that can be cumbersome and unintuitive, FMS-Chat offers a more accessible and efficient way to interact with form data.
- **Our Product**: FMS-Chat leverages LLMs to enhance user interaction with forms, making it easier for users to find and manipulate the information they need.

### Stakeholders
| Stakeholder Type | Description | Responsibilities |
|------------------|-------------|------------------|
| End Users        | Individuals who will interact with the FMS-Chat system to access and manipulate form data. | Use the system to complete forms and retrieve information. |
| System Administrators | Personnel responsible for maintaining and managing the FMS-Chat system. | Ensure system availability, performance, and security. |
| Developers       | Individuals involved in the development and enhancement of the FMS-Chat system. | Design, implement, and test new features and improvements. |

### Environment
1. **User-Involvement**: Users will be actively involved in the design and testing of the FMS-Chat system to ensure it meets their needs and expectations.
2. **Special Environmental Considerations**: The system must be accessible in a web-based environment, supporting various devices and platforms to accommodate a wide range of users, including those with disabilities.
3. **System Platform Requirements**: The FMS-Chat system should be built on NextJS, Supabase, Supertokens, Cerbos and Claude.
4. **Changes in System Platform**: Future changes in the system platform may include updates to the underlying technologies or frameworks used.
5. **Other Applications**: The FMS-Chat system will integrate with existing form management systems and databases to retrieve and manipulate form data.
6. **Integration Requirements**: The FMS-Chat system must support integration with third-party APIs and services to enhance its functionality and data access capabilities.

## Product/Solution overview
| Requirement | Priority | Features | Planned Release |
|-------------|----------|----------|-----------------|
| Filling out forms | High | Users can fill out forms using natural language interactions. | Release 1.0 |
| Manage Forms | Medium | Administrators can create, edit, and delete forms. | Release 1.0 |
| Retrieving form data | High | Users can retrieve specific information from forms through conversational queries. | Release 1.1 |
| Form Analytics | Medium | Administrators can analyze form usage and performance metrics. | Release 1.1 |
| User Management | High | Administrators can manage user accounts and permissions. | Release 1.1 |

## Additional Requirements
| Requirement | Priority | Planned Release |
|-------------|----------|-----------------|
| **Key standards, hardware, or other platform requirements:** | |
| newest Version of NextJS, Supabase, Supertokens, Cerbos and Claude | Normal | Release 1.0 |
| no license costs | High | Release 1.0 |
| **Performance Requirements:** | |
| Short response times for user queries | Normal | Release 1.0 |
| High availability and reliability | High | Release 1.0 |
| **Environmental Requirements:** | |
| System must be accessible on various devices and platforms | High | Release 1.0 |
| Compliance with accessibility standards | High | Release 1.0 |
| Support for multiple languages | Normal | Release 1.0 |
| User Interface must be intuitive and user-friendly | High | Release 1.0 |
| **Security Requirements:** | |
| Data encryption for sensitive information | High | Release 1.0 |
| User authentication and authorization | High | Release 1.0 |
| **External Restrictions** | |
| Compliance with data protection regulations (e.g., GDPR) | High | Release 1.0 |
| Adherence to industry standards for conversational AI | Normal | Release 1.0 |
| External AI services must comply with relevant regulations | High | Release 1.0 |