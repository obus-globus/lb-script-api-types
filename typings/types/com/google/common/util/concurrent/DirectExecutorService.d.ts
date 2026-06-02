import type { AbstractListeningExecutorService } from '../../../../../com/google/common/util/concurrent/AbstractListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DirectExecutorService extends AbstractListeningExecutorService {
    constructor()
    // private lock: Object;
    // private runningTasks: number;
    readonly shutdown: boolean;
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
    // private endTask(): void;
    execute(command: () => void): void;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    shutdownNow(): () => void[];
    // private startTask(): void;
}