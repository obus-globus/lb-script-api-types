import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Intave needs to improve their movement checks
 * works on intave 14.8.4
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebIntave14.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebIntave14.kt:31}
 */
export class NoWebIntave14 extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebIntave14;
    handleEntityCollision(pos: BlockPos): boolean;
}