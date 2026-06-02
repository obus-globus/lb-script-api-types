import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleSpeed$PotionEffectMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed$PotionEffectMode.d.ts'
export class BothEffectsMode extends ModuleSpeed$PotionEffectMode {
    static Companion: Tagged$Companion;
    static INSTANCE: BothEffectsMode;
    // private boostRange: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getBoostRange(): ClosedFloatingPointRange<number>;
    checkPotionEffects(): boolean;
    // private getMultiplier(speedLevel: number, slownessLevel: number): number;
}