import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Trie$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie$DataManipulate.d.ts'
export abstract class Trie extends Object {
    constructor(bytes: ByteBuffer, dataManipulate: Trie$DataManipulate)
    constructor(index: string[], options: number, dataManipulate: Trie$DataManipulate)
    // private m_dataLength_: number;
    // private m_dataManipulate_: Trie$DataManipulate;
    // private m_dataOffset_: number;
    // private m_index_: string[];
    // private m_isLatin1Linear_: boolean;
    // private m_options_: number;
    // private checkHeader(signature: number): boolean;
    equals(other: Object | null): boolean;
    getBMPOffset(ch: string): number;
    getCodePointOffset(ch: number): number;
    getInitialValue(): number;
    getLeadOffset(ch: string): number;
    getRawOffset(offset: number, ch: string): number;
    getSerializedDataSize(): number;
    getSurrogateOffset(lead: string, trail: string): number;
    getValue(index: number): number;
    hashCode(): number;
    isCharTrie(): boolean;
    isIntTrie(): boolean;
    isLatin1Linear(): boolean;
    unserialize(bytes: ByteBuffer): void;
}