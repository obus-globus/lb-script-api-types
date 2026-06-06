import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
/**
 * Schedules tasks that must run inside {@link net.minecraft.client.Minecraft.tick}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/TickLoopTaskExecutor.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/event/TickLoopTaskExecutor.kt:26}
 */
export class TickLoopTaskExecutor extends Object {
    static INSTANCE: TickLoopTaskExecutor;
    // private isInTickLoop: boolean;
    /*not mapped: */ isInTickLoop(): boolean;
    // private logger: Logger;
    // private pendingTasks: () => void[];
    executeInTickLoop(runnable: () => void): void;
    onTickLoopCompleted(): void;
    onTickLoopStart(): void;
}