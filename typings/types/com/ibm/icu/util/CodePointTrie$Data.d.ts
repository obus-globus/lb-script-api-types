import type { CodePointTrie$ValueWidth } from '../../../../com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CodePointTrie$Data extends Object {
    private constructor()
    getDataLength(): number;
    getFromIndex(arg0: number): number;
    getValueWidth(): CodePointTrie$ValueWidth;
    write(arg0: DataOutputStream): number;
}