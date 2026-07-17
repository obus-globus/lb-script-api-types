import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
export class TruffleStringBuilderFactory$AppendCharUTF16NodeGen extends TruffleStringBuilder$AppendCharUTF16Node {
    static create(): TruffleStringBuilder$AppendCharUTF16Node;
    static getUncached(): TruffleStringBuilder$AppendCharUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: string): void;
}