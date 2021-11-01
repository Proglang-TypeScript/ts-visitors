export interface ASTNode {
  kind: ASTType;
  parent?: ASTNode;
  children: ASTNode[];
}

export type ASTNodeKinds = ASTNode['kind'];

export enum ASTType {
  ClassDeclaration = 'ClassDeclaration',
  DeclareKeyword = 'DeclareKeyword',
  Identifier = 'Identifier',
  HeritageClause = 'HeritageClause',
  ExpressionWithTypeArguments = 'ExpressionWithTypeArguments',
  Constructor = 'Constructor',
  Parameter = 'Parameter',
  TypeReference = 'TypeReference',
  MethodDeclaration = 'MethodDeclaration',
  SourceFile = 'SourceFile',
}

export interface ASTSourceFile extends ASTNode {
  kind: ASTType.SourceFile;
  statements: ASTNode[];
}

export interface ASTHeritageClauseNode extends ASTNode {
  kind: ASTType.HeritageClause;
}

export interface ASTExpressionWithTypeArgumentsNode extends ASTNode {
  kind: ASTType.ExpressionWithTypeArguments;
}

export interface ASTDeclareKeywordNode extends ASTNode {
  kind: ASTType.DeclareKeyword;
}

export interface ASTIdentifierNode extends ASTNode {
  kind: ASTType.Identifier;
  text: string;
}

export interface ASTTypeReferenceNode extends ASTNode {
  kind: ASTType.TypeReference;
  typeName: ASTIdentifierNode;
}

export interface ASTParameterNode extends ASTNode {
  kind: ASTType.Parameter;
  name: ASTIdentifierNode;
  type: ASTTypeReferenceNode;
}

export interface ASTConstructorNode extends ASTNode {
  kind: ASTType.Constructor;
  parameters: ASTParameterNode[];
}

export interface ASTMethodDeclarationNode extends ASTNode {
  kind: ASTType.MethodDeclaration;
  parameters: ASTParameterNode[];
  name: ASTIdentifierNode;
}

export interface ASTClassDeclarationNode extends ASTNode {
  kind: ASTType.ClassDeclaration;
  name: ASTIdentifierNode;
  members: ASTClassElement[];
}

export type ASTClassElement = ASTNode;
