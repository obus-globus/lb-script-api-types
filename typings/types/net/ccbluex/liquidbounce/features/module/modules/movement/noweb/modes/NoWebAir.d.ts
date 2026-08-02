import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * No collision with cobwebs
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebAir.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebAir.kt:28}
 */
export class NoWebAir extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebAir;
    handleEntityCollision(pos: BlockPos): boolean;
}