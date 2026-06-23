import type { Object } from '../../java/lang/Object.d.ts'
import type { Function } from '../../kotlin/Function.d.ts'
import type { KCallable } from '../../kotlin/reflect/KCallable.d.ts'
export interface KFunction<R extends unknown> extends Object, Function<R>, KCallable<R>{
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isSuspend(): boolean;
}