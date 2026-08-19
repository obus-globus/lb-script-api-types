import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { TotemEffectSoul$AnimBy } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/totemeffect/modes/TotemEffectSoul$AnimBy.d.ts'
export class TotemEffectSoul$YMotion extends ToggleableValueGroup {
    static INSTANCE: TotemEffectSoul$YMotion;
    readonly animBy: TotemEffectSoul$AnimBy;
    readonly soulYMotion: number;
}