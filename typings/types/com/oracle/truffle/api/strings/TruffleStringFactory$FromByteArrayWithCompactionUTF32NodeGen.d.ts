import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { TruffleString$FromByteArrayWithCompactionUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromByteArrayWithCompactionUTF32Node.d.ts'
export class TruffleStringFactory$FromByteArrayWithCompactionUTF32NodeGen extends TruffleString$FromByteArrayWithCompactionUTF32Node {
    static create(): TruffleString$FromByteArrayWithCompactionUTF32Node;
    static getUncached(): TruffleString$FromByteArrayWithCompactionUTF32Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: number[], arg1Value: number, arg2Value: number, arg3Value: TruffleString$CompactionLevel, arg4Value: boolean): TruffleString;
}