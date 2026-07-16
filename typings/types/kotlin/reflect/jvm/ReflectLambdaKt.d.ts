import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function } from '../../../kotlin/Function.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
export class ReflectLambdaKt extends Object {
    static reflect<R extends unknown>(self: Function<R>): KFunction<R> | null;
}