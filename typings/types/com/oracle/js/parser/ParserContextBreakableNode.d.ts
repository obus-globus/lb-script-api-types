import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParserContextBreakableNode extends ParserContextNode, Object{
    appendStatement(statement: Statement): void;
    getFlag(flag: number): number;
    getFlags(): number;
    isBreakableWithoutLabel(): boolean;
    prependStatement(statement: Statement): void;
    setFlag(flag: number): number;
}