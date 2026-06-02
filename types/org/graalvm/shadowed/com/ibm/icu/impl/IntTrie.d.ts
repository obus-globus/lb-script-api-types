import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Trie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie.d.ts'
import type { Trie$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie$DataManipulate.d.ts'
export class IntTrie extends Trie {
    constructor(bytes: ByteBuffer, dataManipulate: Trie$DataManipulate)
    constructor(index: string[], data: number[], initialvalue: number, options: number, datamanipulate: Trie$DataManipulate)
    constructor(initialValue: number, leadUnitValue: number, dataManipulate: Trie$DataManipulate)
    // private m_data_: number[];
    // private m_initialValue_: number;
    equals(other: Object | null): boolean;
    getBMPValue(ch: string): number;
    getCodePointValue(ch: number): number;
    getInitialValue(): number;
    getLatin1LinearValue(ch: string): number;
    getLeadValue(ch: string): number;
    getSurrogateOffset(lead: string, trail: string): number;
    getSurrogateValue(lead: string, trail: string): number;
    getTrailValue(leadvalue: number, trail: string): number;
    getValue(index: number): number;
    hashCode(): number;
    unserialize(bytes: ByteBuffer): void;
}