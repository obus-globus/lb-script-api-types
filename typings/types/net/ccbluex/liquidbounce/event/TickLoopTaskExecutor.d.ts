import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
/**
 * Schedules tasks that must run inside {@link net.minecraft.client.Minecraft.tick}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/event/TickLoopTaskExecutor.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/event/TickLoopTaskExecutor.kt:29}
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