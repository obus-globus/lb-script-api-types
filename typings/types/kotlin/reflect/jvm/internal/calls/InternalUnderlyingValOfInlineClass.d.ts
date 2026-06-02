import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class InternalUnderlyingValOfInlineClass extends Object implements Caller<Method> {
    protected constructor(unboxMethod: Method, parameterTypes: Type[])
    readonly member: Method | null;
    readonly parameterTypes: Type[];
    readonly returnType: Type;
    // private unboxMethod: Method;
    protected callMethod(instance: Object | null, args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
}