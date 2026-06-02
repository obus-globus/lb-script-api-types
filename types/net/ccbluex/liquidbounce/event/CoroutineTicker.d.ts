import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class CoroutineTicker extends Object {
    static INSTANCE: CoroutineTicker;
    // private logger: Logger;
    // private minecraftTickDepth: number;
    // private pendingList: () => kotlin.Boolean[];
    // private runningList: () => kotlin.Boolean[];
    beginMinecraftTick(): void;
    endMinecraftTick(): void;
    /**
     * Registers a task to be ticked.
     *
     * @param task The callback to be run from next tick. It will be removed once returns true.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:60}
     */
    register(task: () => kotlin.Boolean): void;
    /**
     * We want it to run before everything else, this is because we want to tick the existing tasks before
     * new ones are added and might be ticked in the same tick
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:69}
     */
    tick(): void;
}