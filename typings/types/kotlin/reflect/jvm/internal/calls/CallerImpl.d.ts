import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { CallerImpl$Companion } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Companion.d.ts'
export class CallerImpl<M extends Member> extends Object implements Caller<M> {
    static Companion: CallerImpl$Companion;
    protected constructor(member: M, returnType: Type, valueParameterTypes: Type[])
    readonly member: M;
    readonly parameterTypes: Type[];
    readonly returnType: Type;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
    protected checkObjectInstance(obj: Object | null): void;
}