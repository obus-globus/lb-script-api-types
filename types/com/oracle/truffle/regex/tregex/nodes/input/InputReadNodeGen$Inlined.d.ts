import type { InlineSupport$InlineTarget } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodePointAtIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtIndexNode.d.ts'
import type { TruffleString$ReadByteNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadByteNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { InputReadNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/input/InputReadNode.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export class InputReadNodeGen$Inlined extends InputReadNode implements UnadoptableNode {
    static create(): InputReadNode;
    private constructor(target: InlineSupport$InlineTarget)
    // private state_0_: InlineSupport$StateField;
    // private tStringUTF16_readRawNode_: InlineSupport$ReferenceField<TruffleString$ReadCharUTF16Node>;
    // private tStringUTF32_readRawNode_: InlineSupport$ReferenceField<TruffleString$CodePointAtIndexNode>;
    // private tStringUTF8_readRawNode_: InlineSupport$ReferenceField<TruffleString$ReadByteNode>;
    execute(arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encodings$Encoding): number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encodings$Encoding): number;
}