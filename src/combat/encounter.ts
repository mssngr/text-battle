import Chance from 'chance'
import { prompt } from 'enquirer'
import state from '../state'

const chance = new Chance()

export default async function (allyIDs: string[], enemyIDs: string[]) {
  const allies = allyIDs.map(id => {
    const ally = state.getState().characters[id]
    return {
      name: ally.id,
      message: ally.name,
    }
  })
  const enemies = enemyIDs.map(id => {
    const enemy = state.getState().characters[id]
    return {
      name: enemy.id,
      message: enemy.name,
    }
  })
  const target: { id: string } = await prompt({
    type: 'select',
    name: 'id',
    message: 'Select a target.',
    choices: [...enemies, ...allies, { name: 'user', message: 'Self' }],
  })
  if (enemies.find(enemy => enemy.name === target.id)) {
  }
  if (allies.find(enemy => enemy.name === target.id)) {
  }
  if (target.id === 'user') {
  }
  const initial: { action: string } = await prompt({
    type: 'select',
    name: 'action',
    message: 'Choose an action',
    choices: [target.value],
  })
  if (initial.action === InitialAction.ATTACK) {
    const attack: { action: string } = await prompt({
      type: 'select',
      name: 'action',
      message: 'Choose an action',
      choices: [InitialAction.ATTACK, InitialAction.WAIT, InitialAction.FLEE],
    })
  }
}
