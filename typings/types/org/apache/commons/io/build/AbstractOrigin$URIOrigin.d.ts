import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export class AbstractOrigin$URIOrigin extends AbstractOrigin<URI, AbstractOrigin$URIOrigin> {
    constructor(arg0: URI)
    getFile(): File;
    getInputStream(...arg0: OpenOption[]): InputStream;
    getPath(): Path;
}