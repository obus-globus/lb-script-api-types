import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { RandomAccessFileInputStream } from '../../../../../org/apache/commons/io/input/RandomAccessFileInputStream.d.ts'
export class RandomAccessFileInputStream$Builder extends AbstractStreamBuilder<RandomAccessFileInputStream, RandomAccessFileInputStream$Builder> {
    constructor()
    // private propagateClose: boolean;
    get(): RandomAccessFileInputStream;
    setCloseOnClose(arg0: boolean): RandomAccessFileInputStream$Builder;
    setRandomAccessFile(arg0: RandomAccessFile): RandomAccessFileInputStream$Builder;
}