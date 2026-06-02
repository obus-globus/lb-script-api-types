import type { MessagePatternUtil$MessageContentsNode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePatternUtil$MessageContentsNode.d.ts'
import type { MessagePatternUtil$Node } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePatternUtil$Node.d.ts'
export class MessagePatternUtil$MessageNode extends MessagePatternUtil$Node {
    private constructor()
    // private list: MessagePatternUtil$MessageContentsNode[];
    // private addContentsNode(node: MessagePatternUtil$MessageContentsNode): void;
    // private freeze(): MessagePatternUtil$MessageNode;
    getContents(): MessagePatternUtil$MessageContentsNode[];
    toString(): string;
}