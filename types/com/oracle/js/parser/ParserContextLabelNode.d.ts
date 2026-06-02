import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
export class ParserContextLabelNode extends ParserContextBaseNode {
    constructor(name: string)
    // private name: string;
    getLabelName(): string;
}