import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class ThrowingCaller extends Object implements Caller<void> {
    static INSTANCE: ThrowingCaller;
    readonly member: void | null;
    readonly parameterTypes: Type[];
    readonly returnType: Type;
    call(args: (Object | null)[]): Object;
    checkArguments(args: (Object | null)[]): void;
    checkArguments(argsCount: number): void;
    // private throwUnsupported(): void;
}