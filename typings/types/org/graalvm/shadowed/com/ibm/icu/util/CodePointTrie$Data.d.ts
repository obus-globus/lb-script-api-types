import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CodePointTrie$ValueWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
export abstract class CodePointTrie$Data extends Object {
    private constructor()
    getDataLength(): number;
    getFromIndex(index: number): number;
    getValueWidth(): CodePointTrie$ValueWidth;
    write(dos: DataOutputStream): number;
}