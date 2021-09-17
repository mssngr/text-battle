import { $enum } from 'ts-enum-util'
import { Status, Distance } from '../types'

enum EnemyOffBalance {
  GRAPPLE,
  PULL_ON_TOP,
}

export default {
  [Distance.NEAR]: {
    [Status.READY]: { core: $enum(EnemyOffBalance).getKeys() },
    [Status.OFF_BALANCE]: { core: $enum(EnemyOffBalance).getKeys() },
  },
}
