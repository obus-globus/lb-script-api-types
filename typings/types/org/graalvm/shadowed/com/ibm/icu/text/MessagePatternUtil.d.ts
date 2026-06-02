import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessagePattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern.d.ts'
import type { MessagePatternUtil$MessageNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePatternUtil$MessageNode.d.ts'
export class MessagePatternUtil extends Object {
    static buildMessageNode(parampatternString: string): MessagePatternUtil$MessageNode;
    static buildMessageNode(parampattern: MessagePattern): MessagePatternUtil$MessageNode;
    private constructor()
}