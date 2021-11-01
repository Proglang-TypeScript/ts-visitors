import { ASTNode } from '../ast';

export type VisitorPreFunction = (node: ASTNode) => unknown;
export type VisitorPostFunction<R = unknown> = (node: ASTNode) => R;

export type SyntaxKindResult = {
  post?: boolean;
  traverse?: boolean;
};

export type VisitSyntaxKindFunction<N extends ASTNode = ASTNode> = (
  node: N,
) => SyntaxKindResult | void;

export type Visitor<R = unknown> = VisitorWithGenericNodeType & VisitorAllNodes<R>;

type VisitorAllNodes<R = unknown> = {
  pre?: VisitorPreFunction;
  post?: VisitorPostFunction<R>;
  traverse?: (rootNode: ASTNode, visit: (node: ASTNode) => unknown) => void;
};

type VisitorWithGenericNodeType = {
  nodeVisitor: VisitSyntaxKindFunction;
};
