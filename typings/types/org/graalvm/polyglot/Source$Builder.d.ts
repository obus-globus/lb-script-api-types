import type { URI } from '../../../java/net/URI.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { ByteSequence } from '../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class Source$Builder extends Object {
    constructor(null_: Source, language: string, origin: Object)
    // private cached: boolean;
    // private content: Object;
    // private fileEncoding: Charset;
    // private interactive: boolean;
    // private internal: boolean;
    // private language: string;
    // private mimeType: string;
    // private name: string;
    // private options: { [key: string]: string };
    // private origin: Object;
    // private uri: URI;
    build(): Source;
    buildLiteral(): Source;
    cached(cached: boolean): Source$Builder;
    content(characters: CharSequence): Source$Builder;
    content(code: string): Source$Builder;
    content(bytes: ByteSequence): Source$Builder;
    encoding(encoding: Charset): Source$Builder;
    interactive(interactive: boolean): Source$Builder;
    internal(internal: boolean): Source$Builder;
    mimeType(mimeType: string): Source$Builder;
    name(newName: string): Source$Builder;
    option(key: string, value: string): Source$Builder;
    options(options: { [key: string]: string }): Source$Builder;
    uri(newUri: URI): Source$Builder;
}