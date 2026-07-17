import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { TruffleString$FromNativePointerWithCompactionUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromNativePointerWithCompactionUTF32Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$FromNativePointerWithCompactionUTF32NodeGen extends TruffleString$FromNativePointerWithCompactionUTF32Node {
    static create(): TruffleString$FromNativePointerWithCompactionUTF32Node;
    static getUncached(): TruffleString$FromNativePointerWithCompactionUTF32Node;
    private constructor()
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CompactionLevel, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CompactionLevel, arg4Value: boolean): TruffleString;
}