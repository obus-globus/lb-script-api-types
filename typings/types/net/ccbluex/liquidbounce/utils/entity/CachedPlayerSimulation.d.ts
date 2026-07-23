import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSimulation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PlayerSimulation.d.ts'
import type { SimulatedPlayerCache } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Yes, this name sucks as {@link SimulatedPlayerCache} already exists, but I don't know a better name :/
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/PlayerSimulationCache.kt:204}
 */
export class CachedPlayerSimulation extends Object implements PlayerSimulation {
    constructor(simulatedPlayer: SimulatedPlayerCache)
    readonly pos: Vec3;
    readonly simulatedPlayer: SimulatedPlayerCache;
    // private ticks: number;
    tick(): void;
}