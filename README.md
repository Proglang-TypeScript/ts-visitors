# ts-visitors

An exploration of typed visitors in TypeScript

## Getting started

```bash
$ git clone [THIS-REPO]
$ cd ts-visitors
$ npm i
```

## Type narrowing

ASTs have nodes of multiple kinds. TypeScript defines the nodes of its AST to extend from a single common interface (`Node`). It exposes a single visitor `ts.forEachChild(node: Node, cbNode: (node: Node) => T | undefined, ...)` that gets executed for all nodes. No kind specific callbacks are provided so that any kind specific logic has to be placed within the same visitor.

We explored the benefits of defining a visitor that provides kind specific callbacks and leverages type narrowing through unions: [ts-ast-utils](https://github.com/proglang/ts-ast-utils).

We compared 3 different approaches solving the same problem: printing the constructor and method signatures of a class in a declaration file. For this we manually created a declaration file for the `Pair` class defined in [Featherweight Java](https://www.cis.upenn.edu/~bcpierce/papers/fj-toplas.pdf). Finally, we defined an [AST](src/type-narrowing/ast.ts) for it. The same AST was used for all approaches. Each approach however defines its own typings for the same AST.

1. `acceptWithTypeScriptVisitor`: Inspired by the TypeScript's visitor. No kind specific callbacks are provided. No type narrowing, a single common interface is used when a type represents different node kinds, e.g. the members of a class.
2. `acceptWithInheritance`: Kind specific callbacks. No type narrowing, a single common interface is used when a type represents different node kinds, e.g. the members of a class.
3. `acceptWithUnion`: Kind specific callbacks. Type narrowing through unions is used for the cases when a type represents different node kinds, e.g. the members of a class.

### acceptWithTypeScriptVisitor

([Link](src/type-narrowing/1_acceptWithTypeScriptVisitor))

Run example:
```bash
$ npm run script -- src/type-narrowing/1_acceptWithTypeScriptVisitor/examples/printClasses.ts
```

- The same callback is used for all nodes. The kind specific logic needs to be placed inside the common callback. In our case, we are interested in the `ClassDeclaration`. The type guard `isClassDeclaration()` is used for this.
- User needs to go through documentation to investigate which type guards are available.
- Type guards need to be used also to handle the class members.

### acceptWithInheritance

([Link](src/type-narrowing/2_acceptWithInheritance))

Run example:
```bash
$ npm run script -- src/type-narrowing/2_acceptWithInheritance/examples/printClasses.ts
```

- Kind specific logic is placed in the specific callback for `ClassDeclaration`. The type guard `isClassDeclaration()` is no longer needed.
- Kind specific callback matching is hidden behind a `node as any` clause: see [here](src/type-narrowing/2_acceptWithInheritance/accept/syntaxKindVisit.ts#L9).
- The type [ASTNodeKindsTable](src/type-narrowing/2_acceptWithInheritance/ast/index.ts#L9) is introduced to enable the kind specific callback.
- User can easily use the IDE and code intelligence tools to inspect all available kind specific callbacks.
- No type narrowing is used. Type guards need to be used also to handle the class members. The type [ASTClassElement](src/type-narrowing/2_acceptWithInheritance/ast/index.ts#L90) is a common single interface. The user needs to go through the documentation to identify which nodes are class members.

### acceptWithUnion

([Link](src/type-narrowing/3_acceptWithUnion))

Run example:
```bash
$ npm run script -- src/type-narrowing/3_acceptWithUnion/examples/printClasses.ts
```

- Kind specific logic is placed in the specific callback for `ClassDeclaration`.
- `ASTNode` is defined as [the union](src/type-narrowing/3_acceptWithUnion/ast/index.ts#L23) of all possible nodes instead of defining it as a single common interface.
- The type [ASTClassElement](src/type-narrowing/3_acceptWithUnion/ast/index.ts#L90) is explicitly defined as the union of the possible members.
- No type guards are needed. The compiler narrows the types automatically.
- User can easily use the IDE and code intelligence tools to also inspect all available class members.
