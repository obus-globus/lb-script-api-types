import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class CoroutineTicker extends Object {
    static INSTANCE: CoroutineTicker;
    // private logger: Logger;
    // private minecraftTickDepth: number;
    // private pendingList: () => boolean[];
    // private runningList: () => boolean[];
    beginMinecraftTick(): void;
    endMinecraftTick(): void;
    /**
     * Registers a task to be ticked.
     *
     * @param task The callback to be run from next tick. It will be removed once returns true.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:65}
     */
    register(task: () => boolean): void;
    /**
     * We want it to run before everything else, this is because we want to tick the existing tasks before
     * new ones are added and might be ticked in the same tick
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:73}
     */
    tick(): void;
}