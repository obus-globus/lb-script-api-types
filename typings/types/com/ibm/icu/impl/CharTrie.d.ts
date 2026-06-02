import type { Trie } from '../../../../com/ibm/icu/impl/Trie.d.ts'
import type { Trie$DataManipulate } from '../../../../com/ibm/icu/impl/Trie$DataManipulate.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharTrie extends Trie {
    constructor(arg0: ByteBuffer, arg1: Trie$DataManipulate)
    constructor(arg0: number, arg1: number, arg2: Trie$DataManipulate)
    // private m_data_: string[];
    // private m_initialValue_: string;
    equals(arg0: Object | null): boolean;
    getBMPValue(arg0: string): string;
    getCodePointValue(arg0: number): string;
    getInitialValue(): number;
    getLatin1LinearValue(arg0: string): string;
    getLeadValue(arg0: string): string;
    getSurrogateOffset(arg0: string, arg1: string): number;
    getSurrogateValue(arg0: string, arg1: string): string;
    getTrailValue(arg0: number, arg1: string): string;
    getValue(arg0: number): number;
    hashCode(): number;
    unserialize(arg0: ByteBuffer): void;
}