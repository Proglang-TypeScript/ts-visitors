/* eslint-disable no-console */
import { accept, createFromString } from '../index';
import { ASTConstructorNode, ASTMethodDeclarationNode, ASTNode, ASTType } from '../ast';

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
      if (isConstructorDeclaration(member)) {
        const constructorNode = member;
        constructors.push(
          `new(${constructorNode.parameters
            .map((p) => `${p.name.text}:${p.type.typeName.text}`)
            .join(', ')}}`,
        );
      } else if (isMethodDeclaration(member)) {
        const methodNode = member;
        methods.push(
          `${methodNode.name.text}(${methodNode.parameters
            .map((p) => `${p.name.text}: ${p.type.typeName.text}`)
            .join(', ')})`,
        );
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

function isConstructorDeclaration(node: ASTNode): node is ASTConstructorNode {
  return node.kind === ASTType.Constructor;
}

function isMethodDeclaration(node: ASTNode): node is ASTMethodDeclarationNode {
  return node.kind === ASTType.MethodDeclaration;
}
