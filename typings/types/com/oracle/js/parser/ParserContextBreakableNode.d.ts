import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParserContextBreakableNode extends ParserContextNode, Object{
    isBreakableWithoutLabel(): boolean;
}