import type { File } from '../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { IORandomAccessFile } from '../../../../../org/apache/commons/io/IORandomAccessFile.d.ts'
import type { AbstractOrigin$AbstractRandomAccessFileOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin$AbstractRandomAccessFileOrigin.d.ts'
export class AbstractOrigin$IORandomAccessFileOrigin extends AbstractOrigin$AbstractRandomAccessFileOrigin<IORandomAccessFile, AbstractOrigin$IORandomAccessFileOrigin> {
    constructor(arg0: IORandomAccessFile)
    getFile(): File;
    getPath(): Path[];
}