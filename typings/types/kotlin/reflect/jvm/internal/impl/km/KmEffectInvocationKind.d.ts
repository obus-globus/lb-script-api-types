import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmEffectInvocationKind extends Enum<KmEffectInvocationKind> {
    static AT_LEAST_ONCE: KmEffectInvocationKind;
    static AT_MOST_ONCE: KmEffectInvocationKind;
    static EXACTLY_ONCE: KmEffectInvocationKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KmEffectInvocationKind;
    static values(): KmEffectInvocationKind[];
    private constructor()
    name(): "AT_MOST_ONCE" | "EXACTLY_ONCE" | "AT_LEAST_ONCE";
}