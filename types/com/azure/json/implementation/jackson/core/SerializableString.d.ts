import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SerializableString extends Object{
    appendQuoted(arg0: string[], arg1: number): number;
    appendQuotedUTF8(arg0: number[], arg1: number): number;
    appendUnquoted(arg0: string[], arg1: number): number;
    appendUnquotedUTF8(arg0: number[], arg1: number): number;
    asQuotedChars(): string[];
    asQuotedUTF8(): number[];
    asUnquotedUTF8(): number[];
    getValue(): string;
}