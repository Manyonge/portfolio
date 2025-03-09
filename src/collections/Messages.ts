import { CollectionConfig } from "payload";

export const Messages: CollectionConfig= {
    slug: "messages",
    fields: [
        {
            name: "email",
            type: "email",
            required: true,
        },
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "phone",
            type: "text",
            required: true,
        },
        {
            name: "subject",
            type: "text",
            required: true,
        },
        {
            name: "message",
            type: "textarea",
            required: true,
        },
    ],
};
