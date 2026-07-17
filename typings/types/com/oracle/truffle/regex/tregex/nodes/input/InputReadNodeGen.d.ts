import type { InlineSupport$InlineTarget } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodePointAtIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtIndexNode.d.ts'
import type { TruffleString$ReadByteNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadByteNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { InputReadNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/input/InputReadNode.d.ts'
import type { Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
export class InputReadNodeGen extends InputReadNode {
    static create(): InputReadNode;
    static getUncached(): InputReadNode;
    static inline(paramtarget: InlineSupport$InlineTarget): InputReadNode;
    private constructor()
    // private fallback_readRawNode_: TruffleString$ReadByteNode;
    // private state_0_: number;
    // private tStringUTF16_readRawNode_: TruffleString$ReadCharUTF16Node;
    // private tStringUTF32_readRawNode_: TruffleString$CodePointAtIndexNode;
    execute(arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encoding): number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encoding): number;
    // private fallbackGuard_(state_0: number, arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encoding): boolean;
}