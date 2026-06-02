import type { MessagePattern$ArgType } from '../../../../com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePatternUtil$Node } from '../../../../com/ibm/icu/text/MessagePatternUtil$Node.d.ts'
import type { MessagePatternUtil$VariantNode } from '../../../../com/ibm/icu/text/MessagePatternUtil$VariantNode.d.ts'
export class MessagePatternUtil$ComplexArgStyleNode extends MessagePatternUtil$Node {
    private constructor(arg0: MessagePattern$ArgType)
    readonly argType: MessagePattern$ArgType;
    // private explicitOffset: boolean;
    // private list: MessagePatternUtil$VariantNode[];
    readonly offset: number;
    // private addVariant(arg0: MessagePatternUtil$VariantNode): void;
    // private freeze(): MessagePatternUtil$ComplexArgStyleNode;
    getArgType(): MessagePattern$ArgType;
    getOffset(): number;
    getVariants(): MessagePatternUtil$VariantNode[];
    getVariantsByType(arg0: MessagePatternUtil$VariantNode[], arg1: MessagePatternUtil$VariantNode[]): MessagePatternUtil$VariantNode;
    hasExplicitOffset(): boolean;
    toString(): string;
}