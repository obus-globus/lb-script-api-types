import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { JavaEnumEntriesKProperty } from '../../../../kotlin/reflect/jvm/internal/JavaEnumEntriesKProperty.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class JavaEnumEntriesKProperty$JavaEnumEntriesCaller extends Object implements Caller<void> {
    constructor(null_: JavaEnumEntriesKProperty)
    readonly member: void | null;
    readonly parameterTypes: Type[];
    readonly returnType: Type;
    call(args: (Object | null)[]): Object;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
}