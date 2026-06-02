import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoFallPacketJump$Falling extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallPacketJump$Falling;
    readonly parent: ModeValueGroup<Object>;
    readonly resetFallDistance: boolean;
}