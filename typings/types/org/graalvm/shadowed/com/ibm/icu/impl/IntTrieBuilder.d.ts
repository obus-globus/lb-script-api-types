import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { IntTrie } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/IntTrie.d.ts'
import type { Trie$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie$DataManipulate.d.ts'
import type { TrieBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TrieBuilder.d.ts'
import type { TrieBuilder$DataManipulate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TrieBuilder$DataManipulate.d.ts'
export class IntTrieBuilder extends TrieBuilder {
    static DATA_BLOCK_LENGTH: number;
    constructor(aliasdata: number[], maxdatalength: number, initialvalue: number, leadunitvalue: number, latin1linear: boolean)
    constructor(table: IntTrieBuilder)
    // private m_data_: number[];
    // private m_initialValue_: number;
    // private m_leadUnitValue_: number;
    // private allocDataBlock(): number;
    // private compact(overlap: boolean): void;
    // private fillBlock(block: number, start: number, limit: number, value: number, overwrite: boolean): void;
    // private fold(manipulate: TrieBuilder$DataManipulate): void;
    // private getDataBlock(ch: number): number;
    getValue(ch: number): number;
    getValue(ch: number, inBlockZero: boolean[]): number;
    serialize(os: OutputStream, reduceTo16Bits: boolean, datamanipulate: TrieBuilder$DataManipulate): number;
    serialize(datamanipulate: TrieBuilder$DataManipulate, triedatamanipulate: Trie$DataManipulate): IntTrie;
    setRange(start: number, limit: number, value: number, overwrite: boolean): boolean;
    setValue(ch: number, value: number): boolean;
}