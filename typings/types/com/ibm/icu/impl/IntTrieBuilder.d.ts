import type { IntTrie } from '../../../../com/ibm/icu/impl/IntTrie.d.ts'
import type { Trie$DataManipulate } from '../../../../com/ibm/icu/impl/Trie$DataManipulate.d.ts'
import type { TrieBuilder } from '../../../../com/ibm/icu/impl/TrieBuilder.d.ts'
import type { TrieBuilder$DataManipulate } from '../../../../com/ibm/icu/impl/TrieBuilder$DataManipulate.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class IntTrieBuilder extends TrieBuilder {
    static DATA_BLOCK_LENGTH: number;
    constructor(arg0: IntTrieBuilder)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: boolean)
    // private m_data_: number[];
    // private m_initialValue_: number;
    // private m_leadUnitValue_: number;
    // private allocDataBlock(): number;
    // private compact(arg0: boolean): void;
    // private fillBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    // private fold(arg0: TrieBuilder$DataManipulate): void;
    // private getDataBlock(arg0: number): number;
    getValue(arg0: number): number;
    getValue(arg0: number, arg1: boolean[]): number;
    serialize(arg0: TrieBuilder$DataManipulate, arg1: Trie$DataManipulate): IntTrie;
    serialize(arg0: OutputStream, arg1: boolean, arg2: TrieBuilder$DataManipulate): number;
    setRange(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
    setValue(arg0: number, arg1: number): boolean;
}