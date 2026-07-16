import type { File } from '../../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigurationSource } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
export class Source extends Object {
    constructor(file: File)
    constructor(uri: URI)
    constructor(uri: URI, ignored: number)
    constructor(url: URL)
    constructor(path: Path)
    constructor(source: ConfigurationSource)
    readonly file: File;
    readonly location: string;
    // private uri: URI;
    equals(obj: Object | null): boolean;
    getFile(): File;
    getLocation(): string;
    getPath(): Path;
    getURI(): URI;
    getURL(): URL;
    hashCode(): number;
    toString(): string;
}