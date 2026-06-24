import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReflectKCallable } from '../../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { ValueClassAwareCaller$BoxUnboxData } from '../../../../../kotlin/reflect/jvm/internal/calls/ValueClassAwareCaller$BoxUnboxData.d.ts'
export class ValueClassAwareCaller<M extends Member> extends Object implements Caller<M> {
    constructor(callable: ReflectKCallable<Object>, caller: Caller<M>, isDefault: boolean, forbidUnboxingForIndices: number[])
    call(args: (Object | null)[]): Object | null;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
}