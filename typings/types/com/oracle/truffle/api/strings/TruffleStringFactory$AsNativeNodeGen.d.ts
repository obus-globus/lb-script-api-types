import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NativeAllocator } from '../../../../../com/oracle/truffle/api/strings/NativeAllocator.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$AsNativeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$AsNativeNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$AsNativeNodeGen extends TruffleString$AsNativeNode {
    static create(): TruffleString$AsNativeNode;
    static getUncached(): TruffleString$AsNativeNode;
    private constructor()
    // private inflateStrideProfile__field1_: number;
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: TruffleString, arg1Value: (param0: number) => kotlin.Any, arg2Value: TruffleString$Encoding, arg3Value: boolean, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: TruffleString, arg1Value: (param0: number) => kotlin.Any, arg2Value: TruffleString$Encoding, arg3Value: boolean, arg4Value: boolean): TruffleString;
}