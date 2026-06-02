import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleSpeed$PotionEffectMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed$PotionEffectMode.d.ts'
export class SlownessPotionEffectMode extends ModuleSpeed$PotionEffectMode {
    static Companion: Tagged$Companion;
    static INSTANCE: SlownessPotionEffectMode;
    // private levelRange: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getLevelRange(): { start: number; endInclusive: number; step: number };
    checkPotionEffects(): boolean;
}