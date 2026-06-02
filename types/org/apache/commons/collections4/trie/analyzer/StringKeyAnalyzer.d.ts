import type { KeyAnalyzer } from '../../../../../../org/apache/commons/collections4/trie/KeyAnalyzer.d.ts'
export class StringKeyAnalyzer extends KeyAnalyzer<string> {
    static EQUAL_BIT_KEY: number;
    static INSTANCE: StringKeyAnalyzer;
    static LENGTH: number;
    static NULL_BIT_KEY: number;
    static OUT_OF_BOUNDS_BIT_KEY: number;
    constructor()
    bitIndex(arg0: string, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number): number;
    bitsPerElement(): number;
    isBitSet(arg0: string, arg1: number, arg2: number): boolean;
    isPrefix(arg0: string, arg1: number, arg2: number, arg3: string): boolean;
    lengthInBits(arg0: string): number;
}