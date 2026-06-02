import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
export class TruffleStringFactory$FromJavaStringNodeGen extends TruffleString$FromJavaStringNode {
    static create(): TruffleString$FromJavaStringNode;
    static getUncached(): TruffleString$FromJavaStringNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    // private state_2_: number;
    // private state_3_: number;
    // private state_4_: number;
    // private state_5_: number;
    // private state_6_: number;
    // private state_7_: number;
    // private switchEncodingNode__field8_: number;
    // private switchEncodingNode__field9_: number;
    execute(arg0Value: string, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
}