import { AST } from '../ast';
import { ASTSourceFile } from './ast';

export function createFromString(): ASTSourceFile {
  return AST as ASTSourceFile;
}
