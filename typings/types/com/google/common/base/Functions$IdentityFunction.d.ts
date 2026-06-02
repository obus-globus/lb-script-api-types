import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Functions$IdentityFunction extends Enum<Functions$IdentityFunction> implements Function<Object, Object> {
    static INSTANCE: Functions$IdentityFunction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Functions$IdentityFunction;
    static values(): (Object | null)[];
    private constructor()
    apply(o: Object): Object;
    toString(): string;
    name(): "INSTANCE";
}