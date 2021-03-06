import { Command } from "../struct/Command";
import { Message } from "eris";

export default class extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['halp', '?', 'commands'],
      description: 'Get all commands'
    });
  }
  exec(message: Message, args: string[]) {
    message.channel.createMessage({
      content: Math.random() > .7 ? 'You can now **vote** for **COVID-19 Bot** here: <https://top.gg/bot/685268214435020809/vote>' : '',
      embed: {
        author: {
          name: 'Commands',
          icon_url: this.client.user.avatarURL
        },
        color: this.client.color,
        description: `
Updates:
• Check out the new \`region\` command! (\`cov region us washington\`)
• Leaderboard command now has a regions setting! (\`cov lb cn\`)
***YOU CAN NOW VOTE IN TOP.GG!*** view the \`vote\` command for more!
• **New GRAPH command** (Ex. \`cov graph china\` or \`cov graph us washington\`)
`,
        fields: [
          {
            name: 'Virus',
            value: Array.from(this.client.commands).filter(c => c[1].cat === 'virus').map(c => c[1].name).join(', ')
          },
          {
            name: 'System',
            value: Array.from(this.client.commands).filter(c => c[1].cat === 'general' || c[1].cat === 'system').map(c => c[1].name).join(', ')
          }
        ],
        footer: {
          text: 'Having trouble? Join our support server: "cov support"'
        }
      }
    })
  }
}