import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CachedParseState } from '../../../../../../net/minecraft/util/parsing/packrat/CachedParseState.d.ts'
import type { ErrorCollector } from '../../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
export class StringReaderParserState extends CachedParseState<StringReader> {
    constructor(errorCollector: ErrorCollector<StringReader>, input: StringReader)
    // private input: StringReader;
    input(): StringReader;
    mark(): number;
    restore(mark: number): void;
}