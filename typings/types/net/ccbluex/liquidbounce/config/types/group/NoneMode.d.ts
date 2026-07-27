import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Empty mode without any functionality. Use as a disable mode.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.kt:150}
 */
export class NoneMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}