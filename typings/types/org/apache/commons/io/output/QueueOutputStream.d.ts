import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { QueueInputStream } from '../../../../../org/apache/commons/io/input/QueueInputStream.d.ts'
export class QueueOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: number[])
    // private blockingQueue: number[];
    newQueueInputStream(): QueueInputStream;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}