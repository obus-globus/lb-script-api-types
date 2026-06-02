import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Empty mode without any functionality. Use as a disable mode.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:147}
 */
export class NoneMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
}