import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { NoWebMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { NoWebStrafe$Motion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebStrafe$Motion.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Bypassing Vulcan anticheat (6/27/2025)
 * Bypassing Grim anticheat (7/28/2025)
 *
 * @author XeContrast
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebStrafe.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebStrafe.kt:36}
 */
export class NoWebStrafe extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebStrafe;
    // private motionY: NoWebStrafe$Motion;
    // private onlyGround: boolean;
    // private /*not mapped: */ getOnlyGround(): boolean;
    readonly parent: ModeValueGroup<NoWebMode>;
    // private strength: number;
    // private /*not mapped: */ getStrength(): number;
    handleEntityCollision(pos: BlockPos): boolean;
}