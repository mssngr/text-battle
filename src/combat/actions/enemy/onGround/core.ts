import { $enum } from 'ts-enum-util'
import { Status, Distance } from '../../types'

enum EnemyOnGroundFar {
  ROLL_TO,
}

enum EnemyOnGroundNearReadyOrGrapplingOrOffBalance {
  TRIP,
}

enum EnemyOnGroundNearOnGroundOrOnTopOrOnBottom {
  TAKE_WEAPON,
  RESTRAIN,
}

enum EnemyOnGround {
  GET_ON_TOP,
}

enum EnemyOnTop {
  PUNCH,
  SHOVE_OFF,
  PULL_ON_TOP,
}

enum EnemyOnBottom {
  PUNCH,
  STRANGLE,
}

export default {
  [Distance.FAR]: {
    [Status.READY]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
    [Status.GRAPPLING]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
    [Status.OFF_BALANCE]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
    [Status.ON_GROUND]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
    [Status.ON_TOP]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
    [Status.ON_BOTTOM]: {
      core: $enum(EnemyOnGroundFar).getKeys(),
    },
  },
  [Distance.NEAR]: {
    [Status.READY]: {
      core: $enum(EnemyOnGroundNearReadyOrGrapplingOrOffBalance).getKeys(),
    },
    [Status.GRAPPLING]: {
      core: $enum(EnemyOnGroundNearReadyOrGrapplingOrOffBalance).getKeys(),
    },
    [Status.OFF_BALANCE]: {
      core: $enum(EnemyOnGroundNearReadyOrGrapplingOrOffBalance).getKeys(),
    },
    [Status.ON_GROUND]: {
      core: [
        ...$enum(EnemyOnGroundNearOnGroundOrOnTopOrOnBottom).getKeys(),
        ...$enum(EnemyOnGround).getKeys(),
      ],
    },
    [Status.ON_TOP]: {
      core: [
        ...$enum(EnemyOnGroundNearOnGroundOrOnTopOrOnBottom).getKeys(),
        ...$enum(EnemyOnTop).getKeys(),
      ],
    },
    [Status.ON_BOTTOM]: {
      core: [
        ...$enum(EnemyOnGroundNearOnGroundOrOnTopOrOnBottom).getKeys(),
        ...$enum(EnemyOnBottom).getKeys(),
      ],
    },
  },
}
