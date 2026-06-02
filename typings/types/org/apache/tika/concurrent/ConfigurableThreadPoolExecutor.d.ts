import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConfigurableThreadPoolExecutor extends ExecutorService, Object{
    close(): void;
    setCorePoolSize(arg0: number): void;
    setMaximumPoolSize(arg0: number): void;
}