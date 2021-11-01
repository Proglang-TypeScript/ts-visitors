import { ASTNode, ASTType } from '../ast';
import { SyntaxKindResult, Visitor } from './types';

export const syntaxKindVisit = (node: ASTNode, visitor: Visitor) => {
  let syntaxKindVisitFn;
  let result;

  switch (node.kind) {
    case ASTType.ClassDeclaration:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.Identifier:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.Constructor:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.Parameter:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.TypeReference:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.MethodDeclaration:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.SourceFile:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.HeritageClause:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.ExpressionWithTypeArguments:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;

    case ASTType.DeclareKeyword:
      syntaxKindVisitFn = visitor[node.kind];
      result = (syntaxKindVisitFn && syntaxKindVisitFn(node)) || {};
      break;
  }

  return parseSyntaxKindResult(result);
};

const parseSyntaxKindResult = (result: SyntaxKindResult): Required<SyntaxKindResult> => ({
  post: result.post ?? true,
  traverse: result.traverse ?? true,
});
