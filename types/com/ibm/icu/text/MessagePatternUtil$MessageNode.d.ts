import type { MessagePatternUtil$MessageContentsNode } from '../../../../com/ibm/icu/text/MessagePatternUtil$MessageContentsNode.d.ts'
import type { MessagePatternUtil$Node } from '../../../../com/ibm/icu/text/MessagePatternUtil$Node.d.ts'
export class MessagePatternUtil$MessageNode extends MessagePatternUtil$Node {
    private constructor()
    // private list: MessagePatternUtil$MessageContentsNode[];
    // private addContentsNode(arg0: MessagePatternUtil$MessageContentsNode): void;
    // private freeze(): MessagePatternUtil$MessageNode;
    getContents(): MessagePatternUtil$MessageContentsNode[];
    toString(): string;
}