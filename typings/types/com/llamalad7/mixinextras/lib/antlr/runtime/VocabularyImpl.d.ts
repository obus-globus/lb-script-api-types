import type { Vocabulary } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VocabularyImpl extends Object implements Vocabulary {
    static EMPTY_VOCABULARY: VocabularyImpl;
    static fromTokenNames(paramarg0: string[]): Vocabulary;
    constructor(arg0: string[], arg1: string[])
    constructor(arg0: string[], arg1: string[], arg2: string[])
    // private displayNames: string[];
    // private literalNames: string[];
    // private maxTokenType: number;
    // private symbolicNames: string[];
    getDisplayName(arg0: number): string;
    getLiteralName(arg0: number): string;
    getSymbolicName(arg0: number): string;
}