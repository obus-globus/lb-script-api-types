import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PositionExtrapolation } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { PositionExtrapolation$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation$Companion.d.ts'
import type { SimulatedPlayerCache } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerSimulationExtrapolation extends Object implements PositionExtrapolation {
    static Companion: PositionExtrapolation$Companion;
    static constant(pos: Vec3): PositionExtrapolation;
    static getBestForEntity(target: Entity): PositionExtrapolation;
    constructor(simulation: SimulatedPlayerCache)
    constructor(player: Player)
    // private simulation: SimulatedPlayerCache;
    getPositionInTicks(ticks: number): Vec3;
}