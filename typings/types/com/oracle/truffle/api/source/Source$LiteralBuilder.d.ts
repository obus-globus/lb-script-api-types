import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Source$SourceBuilder } from '../../../../../com/oracle/truffle/api/source/Source$SourceBuilder.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ByteSequence } from '../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class Source$LiteralBuilder extends Source$SourceBuilder {
    constructor(null_: Source, source: Source)
    constructor(null_: Source, language: string, origin: Object, originReadingThrows: boolean)
    // private buildThrowsIOException: boolean;
    build(): Source;
    cached(cached: boolean): Source$LiteralBuilder;
    canonicalizePath(canonicalize: boolean): Source$LiteralBuilder;
    content(characters: CharSequence): Source$LiteralBuilder;
    content(bytes: ByteSequence): Source$LiteralBuilder;
    encoding(encoding: Charset): Source$LiteralBuilder;
    interactive(enabled: boolean): Source$LiteralBuilder;
    internal(enabled: boolean): Source$LiteralBuilder;
    mimeType(newMimeType: string): Source$LiteralBuilder;
    name(newName: string): Source$LiteralBuilder;
    option(key: string, value: string): Source$LiteralBuilder;
    options(options: JavaMap<string, string>): Source$LiteralBuilder;
    uri(ownUri: URI): Source$LiteralBuilder;
}