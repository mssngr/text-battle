import { $enum } from 'ts-enum-util'
import { Status } from './types'

enum SelfReady {
  EQUIP,
  TEND_WOUNDS,
  WAIT,
  BACK_AWAY,
  HIDE,
  FLEE,
}

enum SelfGrappling {
  WAIT,
  WRIGGLE_FREE,
  FALL,
}

enum SelfOffBalance {
  FALL,
  STEADY,
}

enum SelfOnGround {
  WAIT,
  PLAY_DEAD,
  GET_UP,
  ROLL_AWAY,
}

enum SelfOnTop {
  WAIT,
  GET_UP,
  ROLL_AWAY,
}

enum SelfOnBottom {
  WAIT,
  PLAY_DEAD,
  WRIGGLE_FREE,
}

export default {
  [Status.READY]: $enum(SelfReady).getKeys(),
  [Status.GRAPPLING]: $enum(SelfGrappling).getKeys(),
  [Status.OFF_BALANCE]: $enum(SelfOffBalance).getKeys(),
  [Status.ON_GROUND]: $enum(SelfOnGround).getKeys(),
  [Status.ON_TOP]: $enum(SelfOnTop).getKeys(),
  [Status.ON_BOTTOM]: $enum(SelfOnBottom).getKeys(),
}
