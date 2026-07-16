import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Invokable$MethodInvokable } from '../../../../com/google/common/reflect/Invokable$MethodInvokable.d.ts'
import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TypeToken$TypeFilter extends Enum<TypeToken$TypeFilter> implements Predicate<TypeToken<Object>> {
    static IGNORE_TYPE_VARIABLE_OR_WILDCARD: TypeToken$TypeFilter;
    static INTERFACE_ONLY: TypeToken$TypeFilter;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TypeToken$TypeFilter;
    static values(): TypeToken$TypeFilter[];
    constructor(arg2: Invokable$MethodInvokable<T>)
    test(input: TypeToken<Object>): boolean;
    name(): "IGNORE_TYPE_VARIABLE_OR_WILDCARD" | "INTERFACE_ONLY";
}