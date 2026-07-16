import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TypeVariance extends Enum<TypeVariance> {
    static IN: TypeVariance;
    static INV: TypeVariance;
    static OUT: TypeVariance;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeVariance;
    static values(): TypeVariance[];
    private constructor(arg2: string)
    // private presentation: string;
    toString(): string;
    name(): "IN" | "OUT" | "INV";
}