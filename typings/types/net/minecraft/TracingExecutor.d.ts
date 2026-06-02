import type { Record } from '../../java/lang/Record.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../java/util/concurrent/ExecutorService.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TracingExecutor extends Record implements Executor {
    constructor(service: ExecutorService)
    // private service: ExecutorService;
    equals(o: Object | null): boolean;
    execute(command: () => void): void;
    forName(name: string): Executor;
    hashCode(): number;
    service(): ExecutorService;
    shutdownAndAwait(timeout: number, unit: TimeUnit): void;
    toString(): string;
}