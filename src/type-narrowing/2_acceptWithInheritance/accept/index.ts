import { ASTNode } from '../ast';
import { syntaxKindVisit } from './syntaxKindVisit';
import { Visitor } from './types';

export function accept<R = unknown>(node: ASTNode, visitor: Visitor<R>): R | undefined {
  return visitWithVisitor<R>(visitor)(node);
}

const visitWithVisitor = <R = unknown>(visitor: Visitor<R>) => {
  const visit = (node: ASTNode) => {
    const preVisit = visitor.pre;
    preVisit && preVisit(node);

    const syntaxKindVisitResult = syntaxKindVisit(node, visitor);

    if (syntaxKindVisitResult.traverse === true) {
      const traverseFn = visitor.traverse || defaultTraverse;
      traverseFn(node, visit);
    }

    let resultPost;
    if (syntaxKindVisitResult.post === true) {
      const postVisit = visitor.post;
      resultPost = postVisit && postVisit(node);
    }

    return resultPost;
  };

  return visit;
};

const defaultTraverse = (node: ASTNode, visit: (node: ASTNode) => unknown) => {
  node.children.forEach((child) => {
    visit(child);
  });
};
