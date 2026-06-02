import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class SourceSection extends Object {
    constructor(source: Source)
    readonly source: Source;
    equals(obj: Object | null): boolean;
    getCharEndIndex(): number;
    getCharIndex(): number;
    getCharLength(): number;
    getCharacters(): CharSequence;
    getEndColumn(): number;
    getEndLine(): number;
    getSource(): Source;
    getStartColumn(): number;
    getStartLine(): number;
    hasCharIndex(): boolean;
    hasColumns(): boolean;
    hasLines(): boolean;
    hashCode(): number;
    isAvailable(): boolean;
    isValid(): boolean;
    toString(): string;
}