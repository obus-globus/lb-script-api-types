import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Trie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie.d.ts'
import type { Trie$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie$DataManipulate.d.ts'
export class CharTrie extends Trie {
    constructor(bytes: ByteBuffer, dataManipulate: Trie$DataManipulate)
    constructor(initialValue: number, leadUnitValue: number, dataManipulate: Trie$DataManipulate)
    // private m_data_: string[];
    // private m_initialValue_: string;
    equals(other: Object | null): boolean;
    getBMPValue(ch: string): string;
    getCodePointValue(ch: number): string;
    getInitialValue(): number;
    getLatin1LinearValue(ch: string): string;
    getLeadValue(ch: string): string;
    getSurrogateOffset(lead: string, trail: string): number;
    getSurrogateValue(lead: string, trail: string): string;
    getTrailValue(leadvalue: number, trail: string): string;
    getValue(index: number): number;
    hashCode(): number;
    unserialize(bytes: ByteBuffer): void;
}