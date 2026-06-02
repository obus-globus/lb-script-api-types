import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSectionUnloaded } from '../../../../../com/oracle/truffle/api/source/SourceSectionUnloaded.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionUnloaded$Indexed extends SourceSectionUnloaded {
    constructor(source: Source, charIndex: number, charLength: number)
    readonly charIndex: number;
    readonly charLength: number;
    equals(obj: Object | null): boolean;
    getCharEndIndex(): number;
    getCharIndex(): number;
    getCharLength(): number;
    getEndColumn(): number;
    getEndLine(): number;
    getStartColumn(): number;
    getStartLine(): number;
    hasCharIndex(): boolean;
    hasColumns(): boolean;
    hasLines(): boolean;
    hashCode(): number;
}