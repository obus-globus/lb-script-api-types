import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraNotifyWhenFail$Sound extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: KillAuraNotifyWhenFail$Sound;
    readonly parent: ModeValueGroup<Mode>;
    readonly pitch: number;
    readonly volume: number;
}