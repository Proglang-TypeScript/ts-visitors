import { ASTNode } from '../ast';
import { SyntaxKindResult, Visitor } from './types';

export const syntaxKindVisit = (node: ASTNode, visitor: Visitor) => {
  const syntaxKindVisitFn = visitor.nodeVisitor;

  return parseSyntaxKindResult((syntaxKindVisitFn && syntaxKindVisitFn(node)) || {});
};

const parseSyntaxKindResult = (result: SyntaxKindResult): Required<SyntaxKindResult> => ({
  post: result.post ?? true,
  traverse: result.traverse ?? true,
});
