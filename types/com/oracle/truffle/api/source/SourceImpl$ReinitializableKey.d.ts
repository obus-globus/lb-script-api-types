import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { SourceImpl$Key } from '../../../../../com/oracle/truffle/api/source/SourceImpl$Key.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceImpl$ReinitializableKey extends SourceImpl$Key {
    constructor(truffleFile: TruffleFile, content: Object, mimeType: string, languageId: string, url: URL, uri: URI, name: string, path: string, internal: boolean, interactive: boolean, cached: boolean, relativePathInLanguageHome: string, embedderSource: boolean, options: { [key: string]: string })
    // private path: Object;
    // private truffleFile: TruffleFile;
    // private uri: Object;
    // private url: Object;
    getPath(): string;
    getURI(): URI;
    getURL(): URL;
    invalidateAfterPreinitialiation(): void;
}