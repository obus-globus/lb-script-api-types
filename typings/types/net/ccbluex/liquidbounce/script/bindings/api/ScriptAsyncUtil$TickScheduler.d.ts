import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ScriptAsyncUtil$TickScheduler extends Object implements EventListener {
    // private pendingList: () => boolean[];
    // private runningList: () => boolean[];
    // private scriptFutures: Future<Object>[];
    // private tickHandler: EventHook<GameTickEvent>;
    children(): EventListener[];
    clear(): void;
    parent(): EventListener | null;
    // private schedule(breakLoop: () => boolean): void;
    unregister(): void;
}