import { ASTNode } from '../ast';
import { SyntaxKindResult, Visitor } from './types';

export const syntaxKindVisit = (node: ASTNode, visitor: Visitor) => {
  const syntaxKindVisitFn = visitor[node.kind];

  return parseSyntaxKindResult(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (syntaxKindVisitFn && syntaxKindVisitFn(node as any)) || {},
  );
};

const parseSyntaxKindResult = (result: SyntaxKindResult): Required<SyntaxKindResult> => ({
  post: result.post ?? true,
  traverse: result.traverse ?? true,
});
