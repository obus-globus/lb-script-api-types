import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
export class MobEffectCategory extends Enum<MobEffectCategory> {
    static BENEFICIAL: MobEffectCategory;
    static HARMFUL: MobEffectCategory;
    static NEUTRAL: MobEffectCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MobEffectCategory;
    static values(): MobEffectCategory[];
    private constructor(tooltipFormatting: ChatFormatting)
    readonly tooltipFormatting: ChatFormatting;
    getTooltipFormatting(): ChatFormatting;
    name(): "BENEFICIAL" | "HARMFUL" | "NEUTRAL";
}