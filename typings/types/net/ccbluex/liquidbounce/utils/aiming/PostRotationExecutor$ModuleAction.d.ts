import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class PostRotationExecutor$ModuleAction extends Object {
    constructor(module: ClientModule, action: () => void)
    // private action: () => void;
    // private module: ClientModule;
    executeIfRunning(): void;
}