import type { MessagePattern$ArgType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePatternUtil$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePatternUtil$Node.d.ts'
import type { MessagePatternUtil$VariantNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePatternUtil$VariantNode.d.ts'
export class MessagePatternUtil$ComplexArgStyleNode extends MessagePatternUtil$Node {
    private constructor(argType: MessagePattern$ArgType)
    readonly argType: MessagePattern$ArgType;
    // private explicitOffset: boolean;
    // private list: MessagePatternUtil$VariantNode[];
    readonly offset: number;
    // private addVariant(variant: MessagePatternUtil$VariantNode): void;
    // private freeze(): MessagePatternUtil$ComplexArgStyleNode;
    getArgType(): MessagePattern$ArgType;
    getOffset(): number;
    getVariants(): MessagePatternUtil$VariantNode[];
    getVariantsByType(numericVariants: MessagePatternUtil$VariantNode[], keywordVariants: MessagePatternUtil$VariantNode[]): MessagePatternUtil$VariantNode;
    hasExplicitOffset(): boolean;
    toString(): string;
}