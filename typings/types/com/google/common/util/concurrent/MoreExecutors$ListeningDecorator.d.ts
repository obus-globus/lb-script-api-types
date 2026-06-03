import type { AbstractListeningExecutorService } from '../../../../../com/google/common/util/concurrent/AbstractListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
export class MoreExecutors$ListeningDecorator extends AbstractListeningExecutorService {
    constructor(delegate: ExecutorService)
    // private delegate: ExecutorService;
    awaitTermination(timeout: Duration): boolean;
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
    execute(command: () => void): void;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    shutdownNow(): () => void[];
    toString(): string;
}