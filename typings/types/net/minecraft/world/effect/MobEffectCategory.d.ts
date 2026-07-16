import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
export class MobEffectCategory extends Enum<MobEffectCategory> {
    static BENEFICIAL: MobEffectCategory;
    static HARMFUL: MobEffectCategory;
    static NEUTRAL: MobEffectCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MobEffectCategory;
    static values(): MobEffectCategory[];
    private constructor(tooltipFormatting: ChatFormatting)
    readonly tooltipFormatting: ChatFormatting;
    getTooltipFormatting(): ChatFormatting;
    name(): "BENEFICIAL" | "HARMFUL" | "NEUTRAL";
}