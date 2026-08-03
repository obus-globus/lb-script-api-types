import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSimulation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { SimulatedPlayerCache } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Yes, this name sucks as {@link SimulatedPlayerCache} already exists, but I don't know a better name :/
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt:204}
 */
export class CachedPlayerSimulation extends Object implements PlayerSimulation {
    constructor(simulatedPlayer: SimulatedPlayerCache)
    readonly pos: Vec3;
    readonly simulatedPlayer: SimulatedPlayerCache;
    // private ticks: number;
    tick(): void;
}