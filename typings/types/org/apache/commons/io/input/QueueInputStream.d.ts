import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { QueueInputStream$Builder } from '../../../../../org/apache/commons/io/input/QueueInputStream$Builder.d.ts'
import type { QueueOutputStream } from '../../../../../org/apache/commons/io/output/QueueOutputStream.d.ts'
export class QueueInputStream extends InputStream {
    static builder(): QueueInputStream$Builder;
    static nullInputStream(): InputStream;
    constructor()
    constructor(arg0: number[])
    private constructor(arg0: QueueInputStream$Builder)
    // private blockingQueue: number[];
    // private timeoutNanos: number;
    getBlockingQueue(): number[];
    getTimeout(): Duration;
    newQueueOutputStream(): QueueOutputStream;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}