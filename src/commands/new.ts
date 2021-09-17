import { Command, flags } from '@oclif/command'
import { prompt } from 'enquirer'
import state from '../state'
import actions from '../actions'

export default class New extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ text-battle new
hello world from ./src/new.ts!
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    // const { args, flags } = this.parse(New)
    this.log(`You are ${state.getState().characters.user.name}.`)

    this.log(
      'A bandit walks out from behind a tree. He brandishes his fists and smiles. "This is where your journey ends."'
    )

    const first: { action: string } = await prompt({
      type: 'select',
      name: 'action',
      message: 'Choose an action',
      choices: Object.keys(actions),
    })

    const actionType = actions[first.action]

    const second: { action: string } = await prompt({
      type: 'select',
      name: 'action',
      message: 'Choose an action',
      choices: Object.keys(actionType),
    })

    const subAction = actionType[second.action]

    const third: { action: string } = await prompt({
      type: 'select',
      name: 'action',
      message: 'Choose an action',
      choices: Object.keys(subAction),
    })

    const subSubAction = subAction[third.action]

    this.log(subSubAction.ATTEMPT.USER[0])

    // const fourth: { action: string } = await prompt({
    //   type: 'select',
    //   name: 'action',
    //   message: 'Choose an action',
    //   choices: ,
    // })
  }
}
