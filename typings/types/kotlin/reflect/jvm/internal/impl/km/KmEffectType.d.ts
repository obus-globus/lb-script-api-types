import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmEffectType extends Enum<KmEffectType> {
    static CALLS: KmEffectType;
    static RETURNS_CONSTANT: KmEffectType;
    static RETURNS_NOT_NULL: KmEffectType;
    static RETURNS_RESULT_OF: KmEffectType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): KmEffectType;
    static values(): KmEffectType[];
    private constructor()
    name(): "RETURNS_CONSTANT" | "CALLS" | "RETURNS_NOT_NULL" | "RETURNS_RESULT_OF";
}