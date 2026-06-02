import type { SourceImpl$Key } from '../../../../../com/oracle/truffle/api/source/SourceImpl$Key.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceImpl$ImmutableKey extends SourceImpl$Key {
    constructor(content: Object, mimeType: string, languageId: string, url: URL, uri: URI, name: string, path: string, internal: boolean, interactive: boolean, cached: boolean, relativePathInLanguageHome: string, embedderSource: boolean, options: { [key: string]: string })
    // private path: string;
    // private uri: URI;
    // private url: URL;
    getPath(): string;
    getURI(): URI;
    getURL(): URL;
}