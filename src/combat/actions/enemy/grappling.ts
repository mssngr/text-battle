import { $enum } from 'ts-enum-util'
import { Status, Distance } from '../types'

enum EnemyGrappling {
  SHOVE_BACK,
  KNEE_GROIN,
  KNEE_STOMACH,
  BITE_NECK,
  TRIP,
  PULL_ON_TOP,
  TACKLE,
}

export default {
  [Distance.NEAR]: {
    [Status.GRAPPLING]: { core: $enum(EnemyGrappling).getKeys() },
  },
}
