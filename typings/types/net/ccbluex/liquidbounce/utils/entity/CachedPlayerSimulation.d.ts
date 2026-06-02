import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSimulation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { SimulatedPlayerCache } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Yes, this name sucks as {@link SimulatedPlayerCache} already exists, but I don't know a better name :/
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt#L199 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt:199}
 */
export class CachedPlayerSimulation extends Object implements PlayerSimulation {
    constructor(simulatedPlayer: SimulatedPlayerCache)
    readonly pos: Vec3;
    readonly simulatedPlayer: SimulatedPlayerCache;
    // private ticks: number;
    tick(): void;
}