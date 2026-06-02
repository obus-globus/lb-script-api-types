import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { QueueInputStream } from '../../../../../org/apache/commons/io/input/QueueInputStream.d.ts'
export class QueueInputStream$Builder extends AbstractStreamBuilder<QueueInputStream, QueueInputStream$Builder> {
    constructor()
    // private blockingQueue: number[];
    // private timeout: Duration;
    get(): QueueInputStream;
    setBlockingQueue(arg0: number[]): QueueInputStream$Builder;
    setTimeout(arg0: Duration): QueueInputStream$Builder;
}