import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RandomAccessFiles extends Object {
    static contentEquals(paramarg0: RandomAccessFile, paramarg1: RandomAccessFile): boolean;
    static read(paramarg0: RandomAccessFile, paramarg1: number, paramarg2: number): number[];
    static reset(paramarg0: RandomAccessFile): RandomAccessFile;
    constructor()
}