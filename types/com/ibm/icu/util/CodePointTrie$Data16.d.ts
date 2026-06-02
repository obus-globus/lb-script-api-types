import type { CodePointTrie$Data } from '../../../../com/ibm/icu/util/CodePointTrie$Data.d.ts'
import type { CodePointTrie$ValueWidth } from '../../../../com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
export class CodePointTrie$Data16 extends CodePointTrie$Data {
    constructor(arg0: string[])
    // private array: string[];
    getDataLength(): number;
    getFromIndex(arg0: number): number;
    getValueWidth(): CodePointTrie$ValueWidth;
    write(arg0: DataOutputStream): number;
}