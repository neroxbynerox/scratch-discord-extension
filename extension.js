class WebhookDiscord {
    getInfo() {
        return {
            id: 'webhookdiscord',
            name: 'Webhook Discord',
            blocks: [
                {
                    opcode: 'sendEmbed',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'envoyer embed à l\'URL [URL] avec titre [TITLE] et description [DESC]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://discord.com/api/webhooks/...'
                        },
                        TITLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Titre'
                        },
                        DESC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Description'
                        }
                    }
                }
            ]
        };
    }

    async sendEmbed(args) {
        const payload = {
            embeds: [
                {
                    title: args.TITLE,
                    description: args.DESC,
                    color: 5814783
                }
            ]
        };

        try {
            await fetch(args.URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            console.error("Erreur d'envoi :", e);
        }
    }
}

Scratch.extensions.register(new WebhookDiscord());
