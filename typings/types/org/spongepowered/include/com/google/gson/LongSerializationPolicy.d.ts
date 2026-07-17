import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LongSerializationPolicy extends Enum<LongSerializationPolicy> {
    static DEFAULT: LongSerializationPolicy;
    static STRING: LongSerializationPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LongSerializationPolicy;
    static values(): LongSerializationPolicy[];
    private constructor()
    name(): "DEFAULT" | "STRING";
}