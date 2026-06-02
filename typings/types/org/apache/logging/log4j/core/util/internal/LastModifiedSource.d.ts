import type { File } from '../../../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../../../java/net/URI.d.ts'
import type { Source } from '../../../../../../../org/apache/logging/log4j/core/util/Source.d.ts'
export class LastModifiedSource extends Source {
    constructor(file: File)
    constructor(uri: URI)
    constructor(uri: URI, lastModifiedMillis: number)
    readonly lastModified: number;
    getLastModified(): number;
    setLastModified(lastModified: number): void;
}