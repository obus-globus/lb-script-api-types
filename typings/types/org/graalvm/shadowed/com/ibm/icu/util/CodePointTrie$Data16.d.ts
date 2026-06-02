import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { CodePointTrie$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointTrie$Data.d.ts'
import type { CodePointTrie$ValueWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
export class CodePointTrie$Data16 extends CodePointTrie$Data {
    constructor(a: string[])
    // private array: string[];
    getDataLength(): number;
    getFromIndex(index: number): number;
    getValueWidth(): CodePointTrie$ValueWidth;
    write(dos: DataOutputStream): number;
}