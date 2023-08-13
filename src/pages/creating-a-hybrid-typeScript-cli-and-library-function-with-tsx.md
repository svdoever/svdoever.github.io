---
title: Creating a Hybrid TypeScript CLI and Library Function with tsx
published: true
date: '2023-07-03'
spoiler: I write loads of small CLI scripts, but often I want to use the core functionality of the script in other scripts as well. This is an introductory post on how you can achieve this.
description: I write loads of small CLI scripts, but often I want to use the core functionality of the script in other scripts as well. This is an introductory post on how you can achieve this.
image: external image URL, starting with https://
tags: node, tsx, CLI
canonical_url: https://www.sergevandenoever.nl/creating-a-hybrid-typeScript-cli-and-library-function-with-tsx.md
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
As a software developer, you'll often come across scenarios where you'll need to use a function or utility across multiple scripts. On other occasions, you might find it convenient to execute the same function directly from the command line as a CLI (Command Line Interface) tool. In this blog post, we're going to explore how you can achieve this using TypeScript and [TypeScript Execute](https://github.com/esbuild-kit/tsx) (`tsx`), creating a hybrid script that can serve as a library and a CLI tool simultaneously.

`tsx` is a package that allows TypeScript files to be executed directly, without first being transpiled to JavaScript. This feature simplifies the process of running TypeScript scripts from the command line.

It is possible to install `tsx` globally on your system by running:

```bash

npm install -g tsx
```

But I prefer to use it without installation using `npx tsx sayHello.ts`. The `npx` command will either download the script and execute it, or use the locally installed version of `tsx` from an npm project the script is part of. 

## Creating Your TypeScript CLI/Library with tsx

Now, let's create a TypeScript file that will contain our `sayHello` function. Create a file named `sayHello.ts`, and add the following code:

```typescript
#!/usr/bin/env -S npx tsx

// Function that you want to use as a library
export function sayHello(name: string): string {
    return `Hello, ${name}!`;
}

// Check if this module is being run directly (as a CLI)
if (require.main === module) {
    const args = process.argv.slice(2); // get CLI arguments
    console.log(sayHello(args[0]));
}
```

## Understanding Hashbang (Shebang)

Before diving deeper into the TypeScript CLI/library function, it's worth taking a moment to understand a unique aspect of our TypeScript script: the hashbang (`#!`) at the beginning.

The hashbang (or shebang as it's often referred to) is a sequence of characters at the beginning of a script, signifying to the system which interpreter should be used to execute the script. In Unix-like operating systems, the hashbang is followed by the path to the interpreter, such as `/bin/sh` or `/usr/bin/env python`.

In our case we want to use `tsx`, so the script should start with `#!/usr/bin/env tsx`, which serves two crucial purposes: 
1. **Specifying the Interpreter** : It tells the system to use `tsx` (if installed on your system's PATH) to interpret the script. 
2. **Making the Script Executable** : It enables the script to be run as a standalone program, instead of requiring the TypeScript interpreter to be explicitly called.

But our script wants to use `tsx`, without having `tsx` available as a globally installed tool. As described in the stack overflow post [Using NPX command for shell script shebang / interpreter](https://stackoverflow.com/questions/55777677/using-npx-command-for-shell-script-shebang-interpreter) this is possibl with the `-S` flag, so we need to use `#!/usr/bin/env -S npx tsx`.

With the hashbang in place, you can run your TypeScript script directly from the command line (after making it executable with `chmod +x sayHello.ts`):

```bash
./sayHello.ts Serge
```

The system will know to use `tsx` as the interpreter, and your script will execute, printing: `Hello, Serge!`.

Without the hashbang, you would need to invoke the interpreter explicitly every time you run the script, like so:

```bash
npx tsx index.ts Serge
```

This will also be the apporach under Windows, because Windows has no support for the hashbang syntax.

As you can see, for linux-like the hashbang offers a level of convenience, especially when you're creating scripts meant to be run directly from the command line.

## The rest of the code

In the code above, the `sayHello` function can serve as a library function that can be imported into another TypeScript or JavaScript file. Additionally, thanks to the `if` condition that checks whether this module is being run directly, the function can also serve as a CLI tool.

You can import and use the `sayHello` function as a library in other TypeScript (or JavaScript) files as follows:

```typescript
import { sayHello } from './sayHello';

console.log(sayHello("Serge"));
```

## Conclusion

In conclusion, by using TypeScript and `tsx` (TypeScript Execute), we've developed a hybrid TypeScript function that can be both directly executed from the CLI and used as a library function in other scripts. This approach provides flexible ways to reuse your code across different contexts.