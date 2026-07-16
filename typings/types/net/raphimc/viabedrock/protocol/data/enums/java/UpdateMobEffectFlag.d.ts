import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UpdateMobEffectFlag extends Enum<UpdateMobEffectFlag> {
    static AMBIENT: UpdateMobEffectFlag;
    static BLEND: UpdateMobEffectFlag;
    static SHOW_ICON: UpdateMobEffectFlag;
    static VISIBLE: UpdateMobEffectFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UpdateMobEffectFlag;
    static values(): UpdateMobEffectFlag[];
    private constructor()
    getBit(): number;
    name(): "AMBIENT" | "VISIBLE" | "SHOW_ICON" | "BLEND";
}