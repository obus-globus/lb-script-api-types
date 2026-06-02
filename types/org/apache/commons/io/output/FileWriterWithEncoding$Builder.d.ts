import type { File } from '../../../../../java/io/File.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { FileWriterWithEncoding } from '../../../../../org/apache/commons/io/output/FileWriterWithEncoding.d.ts'
export class FileWriterWithEncoding$Builder extends AbstractStreamBuilder<FileWriterWithEncoding, FileWriterWithEncoding$Builder> {
    constructor()
    // private append: boolean;
    // private charsetEncoder: CharsetEncoder;
    // private checkOriginFile(): File;
    get(): FileWriterWithEncoding;
    // private getEncoder(): Object;
    setAppend(arg0: boolean): FileWriterWithEncoding$Builder;
    setCharsetEncoder(arg0: CharsetEncoder): FileWriterWithEncoding$Builder;
}