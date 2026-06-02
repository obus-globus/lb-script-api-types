import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CallableReference } from '../../../kotlin/jvm/internal/CallableReference.d.ts'
import type { FunctionBase } from '../../../kotlin/jvm/internal/FunctionBase.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
export class FunctionReference extends CallableReference implements FunctionBase<Object>, KFunction<Object> {
    static NO_RECEIVER: Object;
    constructor(arg0: number)
    constructor(arg0: number, arg1: Object)
    constructor(arg0: number, arg1: Object, arg2: Class<Object>, arg3: string, arg4: string, arg5: number)
    readonly arity: number;
    readonly arity: number;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    computeReflected(): KCallable<Object>;
    equals(arg0: Object | null): boolean;
    getReflected(): KFunction<Object>;
    hashCode(): number;
    toString(): string;
}