import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class SourceSectionUnavailable extends SourceSection {
    constructor(source: Source)
    equals(obj: Object | null): boolean;
    getCharEndIndex(): number;
    getCharIndex(): number;
    getCharLength(): number;
    getCharacters(): CharSequence;
    getEndColumn(): number;
    getEndLine(): number;
    getStartColumn(): number;
    getStartLine(): number;
    hasCharIndex(): boolean;
    hasColumns(): boolean;
    hasLines(): boolean;
    hashCode(): number;
    isAvailable(): boolean;
    isValid(): boolean;
}