import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecordingInput$Block extends Object {
    private constructor()
    // private blockPosition: number;
    // private blockPositionEnd: number;
    // private bytes: number[];
    contains(arg0: number): boolean;
    get(arg0: number): number;
    read(arg0: RandomAccessFile, arg1: number): void;
    reset(): void;
}