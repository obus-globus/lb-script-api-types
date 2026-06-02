import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSectionUnloaded } from '../../../../../com/oracle/truffle/api/source/SourceSectionUnloaded.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionUnloaded$Lines extends SourceSectionUnloaded {
    constructor(source: Source, startLine: number, endLine: number)
    readonly endLine: number;
    readonly startLine: number;
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