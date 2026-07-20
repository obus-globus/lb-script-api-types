import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class PlacementPositionCandidate extends Object implements Comparable<PlacementPositionCandidate> {
    constructor(pos: BlockPos, notBlockedByCrystal: boolean, requiresBasePlace: boolean)
    // private distanceSq: number;
    // private /*not mapped: */ getDistanceSq(): number;
    /**
     * The damage a crystal at the specific position would deal to the enemy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.kt:35}
     */
    enemyDamage: number | null;
    readonly notBlockedByCrystal: boolean;
    readonly pos: BlockPos;
    readonly requiresBasePlace: boolean;
    // private selfDamage: number | null;
    /**
     * Evaluates the explosion damage to the target, sets it to `null` if the position is invalid.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementPositionCandidate.kt:54}
     */
    calculate(): void;
    compareTo(other: PlacementPositionCandidate): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isNotInvalid(): boolean;
}