import type { File } from '../../../../../java/io/File.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
export class AbstractOrigin$FileOrigin extends AbstractOrigin<File, AbstractOrigin$FileOrigin> {
    constructor(arg0: File)
    getByteArray(): number[];
    getByteArray(arg0: number, arg1: number): number[];
    getFile(): File;
    getPath(): Path[];
}