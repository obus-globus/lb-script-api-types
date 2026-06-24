import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Source$LiteralBuilder } from '../../../../../com/oracle/truffle/api/source/Source$LiteralBuilder.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ByteSequence } from '../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class Source$SourceBuilder extends Object {
    constructor(null_: Source, language: string, origin: Object)
    // private cached: boolean;
    // private canonicalizePath: boolean;
    // private content: Object;
    // private embedderSource: boolean;
    // private fileEncoding: Charset;
    // private fileSystemContext: Object;
    // private interactive: boolean;
    // private internal: boolean;
    // private language: string;
    // private mimeType: string;
    // private name: string;
    // private options: { [key: string]: string };
    // private origin: Object;
    // private path: string;
    // private uri: URI;
    // private url: URL;
    build(): Source;
    cached(enabled: boolean): Source$SourceBuilder;
    canonicalizePath(canonicalize: boolean): Source$SourceBuilder;
    content(characters: CharSequence): Source$LiteralBuilder;
    content(bytes: ByteSequence): Source$LiteralBuilder;
    embedderSource(b: boolean): void;
    encoding(encoding: Charset): Source$SourceBuilder;
    fileSystemContext(context: Object): Source$SourceBuilder;
    interactive(enabled: boolean): Source$SourceBuilder;
    internal(enabled: boolean): Source$SourceBuilder;
    mimeType(mimeType: string): Source$SourceBuilder;
    name(newName: string): Source$SourceBuilder;
    option(key: string, value: string): Source$SourceBuilder;
    options(options: { [key: string]: string }): Source$SourceBuilder;
    path(path: string): void;
    uri(ownUri: URI): Source$SourceBuilder;
    url(url: URL): void;
}