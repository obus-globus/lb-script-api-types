import type { InternalThreadLocalMap } from '../../../../io/netty/util/internal/InternalThreadLocalMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FastThreadLocal<V extends Object | number | string | boolean> extends Object {
    static destroy(): void;
    static removeAll(): void;
    static size(): number;
    constructor()
    // private index: number;
    get(): V;
    get(arg0: InternalThreadLocalMap): V;
    getAndSet(arg0: V): V;
    getAndSet(arg0: InternalThreadLocalMap, arg1: V): V;
    getIfExists(): V;
    initialValue(): V;
    // private initialize(arg0: InternalThreadLocalMap): V;
    isSet(): boolean;
    isSet(arg0: InternalThreadLocalMap): boolean;
    onRemoval(arg0: V): void;
    remove(): void;
    remove(arg0: InternalThreadLocalMap): void;
    // private removeAndGet(arg0: InternalThreadLocalMap): V;
    set(arg0: V): void;
    set(arg0: InternalThreadLocalMap, arg1: V): void;
    // private setKnownNotUnset(arg0: InternalThreadLocalMap, arg1: V): V;
}