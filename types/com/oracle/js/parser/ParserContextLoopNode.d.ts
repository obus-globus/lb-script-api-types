import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
import type { ParserContextBreakableNode } from '../../../../com/oracle/js/parser/ParserContextBreakableNode.d.ts'
export class ParserContextLoopNode extends ParserContextBaseNode implements ParserContextBreakableNode {
    constructor()
    isBreakableWithoutLabel(): boolean;
}