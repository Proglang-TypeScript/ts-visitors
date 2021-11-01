export interface BaseASTNode {
  kind: ASTType;
  parent?: ASTNode;
  children: ASTNode[];
}

type ASTNodeKinds = ASTNode['kind'];

type ASTNodeKindsTable = {
  [ASTType.SourceFile]: ASTSourceFile;
  [ASTType.Identifier]: ASTIdentifierNode;
  [ASTType.TypeReference]: ASTTypeReferenceNode;
  [ASTType.Parameter]: ASTParameterNode;
  [ASTType.Constructor]: ASTConstructorNode;
  [ASTType.MethodDeclaration]: ASTMethodDeclarationNode;
  [ASTType.ClassDeclaration]: ASTClassDeclarationNode;
  [ASTType.DeclareKeyword]: ASTDeclareKeywordNode;
  [ASTType.ExpressionWithTypeArguments]: ASTExpressionWithTypeArgumentsNode;
  [ASTType.HeritageClause]: ASTHeritageClauseNode;
};

type Unionize<T> = T[keyof T];
export type ASTNode = Unionize<ASTNodeKindsTable>;

export type ASTSpecificNode<T extends ASTNodeKinds> = ASTNodeKindsTable[T];

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

export interface ASTSourceFile extends BaseASTNode {
  kind: ASTType.SourceFile;
  statements: ASTNode[];
}

export interface ASTHeritageClauseNode extends BaseASTNode {
  kind: ASTType.HeritageClause;
}

export interface ASTExpressionWithTypeArgumentsNode extends BaseASTNode {
  kind: ASTType.ExpressionWithTypeArguments;
}

export interface ASTDeclareKeywordNode extends BaseASTNode {
  kind: ASTType.DeclareKeyword;
}

export interface ASTIdentifierNode extends BaseASTNode {
  kind: ASTType.Identifier;
  text: string;
}

export interface ASTTypeReferenceNode extends BaseASTNode {
  kind: ASTType.TypeReference;
  typeName: ASTIdentifierNode;
}

export interface ASTParameterNode extends BaseASTNode {
  kind: ASTType.Parameter;
  name: ASTIdentifierNode;
  type: ASTTypeReferenceNode;
}

export interface ASTConstructorNode extends BaseASTNode {
  kind: ASTType.Constructor;
  parameters: ASTParameterNode[];
}

export interface ASTMethodDeclarationNode extends BaseASTNode {
  kind: ASTType.MethodDeclaration;
  parameters: ASTParameterNode[];
  name: ASTIdentifierNode;
}

export interface ASTClassDeclarationNode extends BaseASTNode {
  kind: ASTType.ClassDeclaration;
  name: ASTIdentifierNode;
  members: ASTClassElement[];
}

type ASTClassElement = ASTConstructorNode | ASTMethodDeclarationNode;
