import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Functions$ToStringFunction extends Enum<Functions$ToStringFunction> implements Function<Object, string> {
    static INSTANCE: Functions$ToStringFunction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Functions$ToStringFunction;
    static values(): (Object | null)[];
    private constructor()
    apply(o: Object): string;
    toString(): string;
    name(): "INSTANCE";
}