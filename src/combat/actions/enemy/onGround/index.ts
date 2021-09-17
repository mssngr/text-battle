import merge from 'lodash/merge'
import core from './core'
import bow from './bow'
import thrown from './thrown'
import stab from './stab'
import slash from './slash'
import bash from './bash'
import punch from './punch'
import kick from './kick'

export default merge(core, bow, thrown, stab, slash, bash, punch, kick)
