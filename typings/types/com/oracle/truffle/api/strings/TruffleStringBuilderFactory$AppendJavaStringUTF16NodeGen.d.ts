import type { TruffleStringBuilder$AppendJavaStringUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendJavaStringUTF16Node.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
export class TruffleStringBuilderFactory$AppendJavaStringUTF16NodeGen extends TruffleStringBuilder$AppendJavaStringUTF16Node {
    static create(): TruffleStringBuilder$AppendJavaStringUTF16Node;
    static getUncached(): TruffleStringBuilder$AppendJavaStringUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(sb: TruffleStringBuilderUTF16, a: string): void;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: string, arg2Value: number, arg3Value: number): void;
}