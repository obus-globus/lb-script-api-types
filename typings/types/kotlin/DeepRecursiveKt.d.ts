import type { Object } from '../java/lang/Object.d.ts'
import type { DeepRecursiveFunction } from '../kotlin/DeepRecursiveFunction.d.ts'
export class DeepRecursiveKt extends Object {
    static invoke<R extends unknown, T extends unknown>(self: DeepRecursiveFunction<T, R>, value: T): R;
}