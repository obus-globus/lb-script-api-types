import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Color4b } from '../../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class KillAuraNotifyWhenFail$Box extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: KillAuraNotifyWhenFail$Box;
    readonly color: Color4b;
    readonly colorRainbow: boolean;
    readonly fadeSeconds: number;
    readonly parent: ModeValueGroup<Mode>;
}