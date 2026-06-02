import type { MessagePatternUtil$MessageNode } from '../../../../com/ibm/icu/text/MessagePatternUtil$MessageNode.d.ts'
import type { MessagePatternUtil$Node } from '../../../../com/ibm/icu/text/MessagePatternUtil$Node.d.ts'
export class MessagePatternUtil$VariantNode extends MessagePatternUtil$Node {
    private constructor()
    // private msgNode: MessagePatternUtil$MessageNode;
    // private numericValue: number;
    readonly selector: string;
    getMessage(): MessagePatternUtil$MessageNode;
    getSelector(): string;
    getSelectorValue(): number;
    isSelectorNumeric(): boolean;
    toString(): string;
}