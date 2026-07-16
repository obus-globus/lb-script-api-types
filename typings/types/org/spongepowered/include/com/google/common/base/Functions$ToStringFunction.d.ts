import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
export class Functions$ToStringFunction extends Enum<Functions$ToStringFunction> implements Function<Object, string> {
    static INSTANCE: Functions$ToStringFunction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Functions$ToStringFunction;
    static values(): Functions$ToStringFunction[];
    private constructor()
    apply(arg0: Object): string;
    toString(): string;
    name(): "INSTANCE";
}