import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { PostRotationExecutor$ModuleAction } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/PostRotationExecutor$ModuleAction.d.ts'
/**
 * Executes code right after the client sent the normal movement packet or at the start of the next tick.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/PostRotationExecutor.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/PostRotationExecutor.kt:34}
 */
export class PostRotationExecutor extends Object implements EventListener {
    static INSTANCE: PostRotationExecutor;
    // private networkMoveHandler: EventHook<PlayerNetworkMovementTickEvent>;
    // private normalTasks: PostRotationExecutor$ModuleAction[];
    // private postMoveTasks: PostRotationExecutor$ModuleAction[];
    // private priorityAction: PostRotationExecutor$ModuleAction | null;
    // private priorityActionPostMove: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    addTask(module: ClientModule, postMove: boolean, priority: boolean, task: () => void): void;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
}