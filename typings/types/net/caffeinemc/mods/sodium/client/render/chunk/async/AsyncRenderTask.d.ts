import type { Callable } from '../../../../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { CancellationToken } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
export abstract class AsyncRenderTask<T extends unknown> extends Object implements Callable<T>, CancellationToken {
    static NEVER_CANCELLED: CancellationToken;
    constructor(arg0: Viewport, arg1: number)
    readonly frame: number;
    // private future: Future<T>;
    // private state: number;
    // private viewport: Viewport;
    call(): T;
    cancelIfNotStarted(): boolean;
    getFrame(): number;
    getResult(): T;
    isCancelled(): boolean;
    isDone(): boolean;
    registerPresentPatches(arg0: RenderSection[]): void;
    runTask(): T;
    setCancelled(): void;
    submitTo(arg0: ExecutorService): void;
}