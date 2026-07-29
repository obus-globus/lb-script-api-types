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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebStrafe.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/modes/NoWebStrafe.kt:36}
 */
export class NoWebStrafe extends NoWebMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoWebStrafe;
    // private motionY: NoWebStrafe$Motion;
    // private onlyGround: boolean;
    // private /*not mapped: */ getOnlyGround(): boolean;
    readonly parent: ModeValueGroup<NoWebMode>;
    getParent(): ModeValueGroup<NoWebMode>;
    // private strength: number;
    // private /*not mapped: */ getStrength(): number;
    handleEntityCollision(pos: BlockPos): boolean;
}