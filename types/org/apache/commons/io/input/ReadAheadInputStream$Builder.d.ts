import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { ReadAheadInputStream } from '../../../../../org/apache/commons/io/input/ReadAheadInputStream.d.ts'
export class ReadAheadInputStream$Builder extends AbstractStreamBuilder<ReadAheadInputStream, ReadAheadInputStream$Builder> {
    constructor()
    // private executorService: ExecutorService;
    get(): ReadAheadInputStream;
    setExecutorService(arg0: ExecutorService): ReadAheadInputStream$Builder;
}