import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../net/minecraft/util/context/ContextKey.d.ts'
export class ContextMap extends Object {
    private constructor(params: Map<ContextKey<Object>, Object>)
    // private params: Map<ContextKey<Object>, Object>;
    getOptional<T extends unknown>(key: ContextKey<T>): T;
    getOrDefault<T extends unknown>(param: ContextKey<T>, _default: T): T;
    getOrThrow<T extends unknown>(key: ContextKey<T>): T;
    has(key: ContextKey<Object>): boolean;
}