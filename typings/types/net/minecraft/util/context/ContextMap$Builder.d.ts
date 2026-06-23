import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ContextKeySet } from '../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ContextMap } from '../../../../net/minecraft/util/context/ContextMap.d.ts'
export class ContextMap$Builder extends Object {
    constructor()
    // private params: Map<ContextKey<Object>, Object>;
    create(paramSet: ContextKeySet): ContextMap;
    getOptionalParameter<T extends unknown>(param: ContextKey<T>): T;
    getParameter<T extends unknown>(param: ContextKey<T>): T;
    withOptionalParameter<T extends unknown>(param: ContextKey<T>, value: T): ContextMap$Builder;
    withParameter<T extends unknown>(param: ContextKey<T>, value: T): ContextMap$Builder;
}