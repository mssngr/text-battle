import { $enum } from 'ts-enum-util'
import { Status, Distance } from '../types'

/* READY */
enum ReadyAnyAny {
  WAIT,
}

enum ReadyAnyNotOnBottom {
  TACKLE,
}

enum ReadyAimNotOnBottom {
  AIM_BODY,
  AIM_HEAD,
  AIM_LEFT_ARM,
  AIM_RIGHT_ARM,
  AIM_LEGS,
}

// Far
enum ReadyFarAny {
  MOVE_CLOSER,
  FLEE,
}

// Near
enum ReadyNearAny {
  BACK_AWAY,
}

enum ReadyNearReadyOrOffBalanceOrOnTop {
  KICK,
  BITE,
  SHOVE,
}

enum ReadyNearReadyOrOffBalance {
  TRIP,
}

enum ReadyNearReady {
  FEINT,
}

enum ReadyNearOnGroundOrOnBottom {
  STOMP_HEAD,
  KICK_WEAPON,
}

enum ReadyNearOnTop {
  PULL_OFF,
}

enum ReadyNearHands {
  STRANGLE,
  GRAPPLE,
}

enum ReadyOrGrapplingNearGrapplingHands {
  STRANGLE,
}

/* OFF BALANCE */
enum OffBalance {
  REGAIN_BALANCE,
  FALL,
}

enum OffBalanceNearReadyOrOffBalance {
  PULL_DOWN,
  GRAPPLE,
}

/* GRAPPLING */
enum Grappling {
  SHOVE,
  BREAK_FREE,
  KNEE,
  BITE,
  TRIP,
  TACKLE,
}

/* ON GROUND */
enum OnGround {
  GET_UP,
  WAIT,
  PLAY_DEAD,
}

export default {
  [Status.READY]: {
    [Distance.FAR]: {
      [Status.READY]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyFarAny).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
      },
      [Status.OFF_BALANCE]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyFarAny).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
      },
      [Status.ON_GROUND]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyFarAny).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
      },
      [Status.ON_TOP]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyFarAny).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
      },
      [Status.ON_BOTTOM]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyFarAny).getKeys(),
        ],
      },
    },
    [Distance.NEAR]: {
      [Status.READY]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyNearAny).getKeys(),
          ...$enum(ReadyNearReadyOrOffBalanceOrOnTop).getKeys(),
          ...$enum(ReadyNearReadyOrOffBalance).getKeys(),
          ...$enum(ReadyNearReady).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
        hands: [
          ...$enum(ReadyAimNotOnBottom).getKeys(),
          ...$enum(ReadyNearHands).getKeys(),
        ],
        slash: $enum(ReadyAimNotOnBottom).getKeys(),
        stab: $enum(ReadyAimNotOnBottom).getKeys(),
        bash: $enum(ReadyAimNotOnBottom).getKeys(),
      },
      [Status.OFF_BALANCE]: {
        core: [
          ...$enum(ReadyAnyAny).getKeys(),
          ...$enum(ReadyAnyNotOnBottom).getKeys(),
          ...$enum(ReadyNearAny).getKeys(),
          ...$enum(ReadyNearReadyOrOffBalanceOrOnTop).getKeys(),
          ...$enum(ReadyNearReadyOrOffBalance).getKeys(),
        ],
        range: $enum(ReadyAimNotOnBottom).getKeys(),
        hands: [
          ...$enum(ReadyAimNotOnBottom).getKeys(),
          ...$enum(ReadyNearHands).getKeys(),
        ],
        slash: $enum(ReadyAimNotOnBottom).getKeys(),
        stab: $enum(ReadyAimNotOnBottom).getKeys(),
        bash: $enum(ReadyAimNotOnBottom).getKeys(),
      },
    },
    [Distance.GRAPPLING]: {
      [Status.READY]: {
        core: $enum(ReadyGrappling).getKeys(),
        hands: [
          ...$enum(ReadyGrapplingHands).getKeys(),
          ...$enum(ReadyAimNotOnBottom).getKeys(),
        ],
      },
    },
  },
  [Status.OFF_BALANCE]: {
    [Distance.FAR]: {
      core: $enum(OffBalance).getKeys(),
    },
    [Distance.NEAR]: {
      core: [
        ...$enum(OffBalance).getKeys(),
        ...$enum(OffBalanceNearGrappling).getKeys(),
      ],
    },
    [Distance.GRAPPLING]: {
      core: [
        ...$enum(OffBalance).getKeys(),
        ...$enum(OffBalanceNearGrappling).getKeys(),
      ],
    },
  },
  [Status.ON_GROUND]: {
    [Distance.FAR]: {
      core: $enum(OnGround).getKeys(),
    },
  },
}
