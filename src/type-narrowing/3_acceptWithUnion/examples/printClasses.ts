/* eslint-disable no-console */
import { accept, createFromString } from '../index';
import { ASTType } from '../ast';

const ast = createFromString();

const classes: {
  name: string;
  constructors: string[];
  methods: string[];
}[] = [];

accept(ast, {
  [ASTType.ClassDeclaration]: (node) => {
    const classDeclaration = node;
    const constructors: string[] = [];
    const methods: string[] = [];

    classDeclaration.members.map((member) => {
      switch (member.kind) {
        case ASTType.Constructor:
          const constructorNode = member;
          constructors.push(
            `new(${constructorNode.parameters
              .map((p) => `${p.name.text}:${p.type.typeName.text}`)
              .join(', ')}}`,
          );
          break;

        case ASTType.MethodDeclaration:
          const methodNode = member;

          methods.push(
            `${methodNode.name.text}(${methodNode.parameters
              .map((p) => `${p.name.text}: ${p.type.typeName.text}`)
              .join(', ')})`,
          );
          break;
      }
    });

    classes.push({
      name: classDeclaration.name.text,
      constructors,
      methods,
    });

    return { traverse: false };
  },
});

console.log(`Classes:`);
console.log(classes);
