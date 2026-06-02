import type { Trie$DataManipulate } from '../../../../com/ibm/icu/impl/Trie$DataManipulate.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Trie extends Object {
    constructor(arg0: ByteBuffer, arg1: Trie$DataManipulate)
    constructor(arg0: string[], arg1: number, arg2: Trie$DataManipulate)
    // private m_dataLength_: number;
    // private m_dataManipulate_: Trie$DataManipulate;
    // private m_dataOffset_: number;
    // private m_index_: string[];
    // private m_isLatin1Linear_: boolean;
    // private m_options_: number;
    // private checkHeader(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    getBMPOffset(arg0: string): number;
    getCodePointOffset(arg0: number): number;
    getInitialValue(): number;
    getLeadOffset(arg0: string): number;
    getRawOffset(arg0: number, arg1: string): number;
    getSerializedDataSize(): number;
    getSurrogateOffset(arg0: string, arg1: string): number;
    getValue(arg0: number): number;
    hashCode(): number;
    isCharTrie(): boolean;
    isIntTrie(): boolean;
    isLatin1Linear(): boolean;
    unserialize(arg0: ByteBuffer): void;
}