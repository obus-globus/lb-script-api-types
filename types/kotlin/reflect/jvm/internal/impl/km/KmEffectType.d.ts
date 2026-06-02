import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmEffectType extends Enum<KmEffectType> {
    static CALLS: KmEffectType;
    static RETURNS_CONSTANT: KmEffectType;
    static RETURNS_NOT_NULL: KmEffectType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KmEffectType;
    static values(): (Object | null)[];
    private constructor()
    name(): "RETURNS_CONSTANT" | "CALLS" | "RETURNS_NOT_NULL";
}