oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dcent
$ dcent COMMAND
running command...
$ dcent (--version)
dcent/0.0.0 darwin-x64 node-v14.18.1
$ dcent --help [COMMAND]
USAGE
  $ dcent COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dcent hello PERSON`](#dcent-hello-person)
* [`dcent hello world`](#dcent-hello-world)
* [`dcent help [COMMAND]`](#dcent-help-command)
* [`dcent plugins`](#dcent-plugins)
* [`dcent plugins:install PLUGIN...`](#dcent-pluginsinstall-plugin)
* [`dcent plugins:inspect PLUGIN...`](#dcent-pluginsinspect-plugin)
* [`dcent plugins:install PLUGIN...`](#dcent-pluginsinstall-plugin-1)
* [`dcent plugins:link PLUGIN`](#dcent-pluginslink-plugin)
* [`dcent plugins:uninstall PLUGIN...`](#dcent-pluginsuninstall-plugin)
* [`dcent plugins:uninstall PLUGIN...`](#dcent-pluginsuninstall-plugin-1)
* [`dcent plugins:uninstall PLUGIN...`](#dcent-pluginsuninstall-plugin-2)
* [`dcent plugins update`](#dcent-plugins-update)

## `dcent hello PERSON`

Say hello

```
USAGE
  $ dcent hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mihirmohan38/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `dcent hello world`

Say hello world

```
USAGE
  $ dcent hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `dcent help [COMMAND]`

Display help for dcent.

```
USAGE
  $ dcent help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dcent.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `dcent plugins`

List installed plugins.

```
USAGE
  $ dcent plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dcent plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `dcent plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dcent plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dcent plugins add

EXAMPLES
  $ dcent plugins:install myplugin 

  $ dcent plugins:install https://github.com/someuser/someplugin

  $ dcent plugins:install someuser/someplugin
```

## `dcent plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dcent plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dcent plugins:inspect myplugin
```

## `dcent plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dcent plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dcent plugins add

EXAMPLES
  $ dcent plugins:install myplugin 

  $ dcent plugins:install https://github.com/someuser/someplugin

  $ dcent plugins:install someuser/someplugin
```

## `dcent plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dcent plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ dcent plugins:link myplugin
```

## `dcent plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dcent plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dcent plugins unlink
  $ dcent plugins remove
```

## `dcent plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dcent plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dcent plugins unlink
  $ dcent plugins remove
```

## `dcent plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dcent plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dcent plugins unlink
  $ dcent plugins remove
```

## `dcent plugins update`

Update installed plugins.

```
USAGE
  $ dcent plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
