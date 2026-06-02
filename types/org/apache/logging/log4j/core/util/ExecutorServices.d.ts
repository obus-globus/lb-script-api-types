import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExecutorServices extends Object {
    static ensureInitialized(): void;
    static shutdown(paramexecutorService: ExecutorService, paramtimeout: number, paramtimeUnit: TimeUnit, paramsource: string): boolean;
    constructor()
}