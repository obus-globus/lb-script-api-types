import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vocabulary } from '../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
export class VocabularyImpl extends Object implements Vocabulary {
    static EMPTY_VOCABULARY: VocabularyImpl;
    static fromTokenNames(paramarg0: string[]): Vocabulary;
    constructor(arg0: string[], arg1: string[])
    constructor(arg0: string[], arg1: string[], arg2: string[])
    readonly displayNames: string[];
    readonly literalNames: string[];
    readonly maxTokenType: number;
    readonly symbolicNames: string[];
    getDisplayName(arg0: number): string;
    getDisplayNames(): string[];
    getLiteralName(arg0: number): string;
    getLiteralNames(): string[];
    getMaxTokenType(): number;
    getSymbolicName(arg0: number): string;
    getSymbolicNames(): string[];
}