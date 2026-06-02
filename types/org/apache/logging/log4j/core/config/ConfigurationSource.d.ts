import type { File } from '../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
export class ConfigurationSource extends Object {
    static COMPOSITE_SOURCE: ConfigurationSource;
    static NULL_SOURCE: ConfigurationSource;
    static fromResource(paramresource: string, paramloader: ClassLoader): ConfigurationSource;
    static fromUri(paramconfigLocation: URI): ConfigurationSource;
    constructor(stream: InputStream)
    constructor(stream: InputStream, file: File)
    constructor(stream: InputStream, url: URL)
    constructor(stream: InputStream, url: URL, lastModified: number)
    constructor(stream: InputStream, path: Path[])
    private constructor(data: number[], url: URL, lastModified: number)
    constructor(source: Source, data: number[], lastModified: number)
    // private currentLastModified: number;
    readonly data: number[];
    // private initialLastModified: number;
    readonly source: Source;
    // private stream: InputStream;
    getFile(): File;
    getInputStream(): InputStream;
    getLastModified(): number;
    getLocation(): string;
    getURI(): URI;
    getURL(): URL;
    // private isLocation(): boolean;
    resetInputStream(): ConfigurationSource;
    setData(data: number[]): void;
    setModifiedMillis(currentLastModified: number): void;
    setSource(ignored: Source): void;
    toString(): string;
}