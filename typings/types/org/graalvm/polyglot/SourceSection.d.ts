import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceSectionDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceSectionDispatch.d.ts'
export class SourceSection extends Object {
    constructor(source: Source, dispatch: AbstractPolyglotImpl$AbstractSourceSectionDispatch, receiver: Object)
    // private dispatch: AbstractPolyglotImpl$AbstractSourceSectionDispatch;
    // private receiver: Object;
    readonly source: Source;
    equals(obj: Object | null): boolean;
    getCharEndIndex(): number;
    getCharIndex(): number;
    getCharLength(): number;
    getCharacters(): CharSequence;
    getCode(): CharSequence;
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
    toString(): string;
}