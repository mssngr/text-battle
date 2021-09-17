text-battle
===========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/text-battle.svg)](https://npmjs.org/package/text-battle)
[![Downloads/week](https://img.shields.io/npm/dw/text-battle.svg)](https://npmjs.org/package/text-battle)
[![License](https://img.shields.io/npm/l/text-battle.svg)](https://github.com/mssngr/text-battle/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g text-battle
$ text-battle COMMAND
running command...
$ text-battle (-v|--version|version)
text-battle/0.0.0 linux-x64 node-v12.22.1
$ text-battle --help [COMMAND]
USAGE
  $ text-battle COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`text-battle hello [FILE]`](#text-battle-hello-file)
* [`text-battle help [COMMAND]`](#text-battle-help-command)

## `text-battle hello [FILE]`

describe the command here

```
USAGE
  $ text-battle hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ text-battle hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mssngr/text-battle/blob/v0.0.0/src/commands/hello.ts)_

## `text-battle help [COMMAND]`

display help for text-battle

```
USAGE
  $ text-battle help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
