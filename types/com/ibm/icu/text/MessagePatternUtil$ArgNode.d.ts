import type { MessagePattern$ArgType } from '../../../../com/ibm/icu/text/MessagePattern$ArgType.d.ts'
import type { MessagePatternUtil$ComplexArgStyleNode } from '../../../../com/ibm/icu/text/MessagePatternUtil$ComplexArgStyleNode.d.ts'
import type { MessagePatternUtil$MessageContentsNode } from '../../../../com/ibm/icu/text/MessagePatternUtil$MessageContentsNode.d.ts'
export class MessagePatternUtil$ArgNode extends MessagePatternUtil$MessageContentsNode {
    private constructor()
    readonly argType: MessagePattern$ArgType;
    readonly complexStyle: MessagePatternUtil$ComplexArgStyleNode;
    readonly name: string;
    readonly number: number;
    // private style: string;
    readonly typeName: string;
    getArgType(): MessagePattern$ArgType;
    getComplexStyle(): MessagePatternUtil$ComplexArgStyleNode;
    getName(): string;
    getNumber(): number;
    getSimpleStyle(): string;
    getTypeName(): string;
    toString(): string;
}