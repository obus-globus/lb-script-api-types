import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expirable } from '../../../../../net/raphimc/minecraftauth/util/Expirable.d.ts'
import type { IoSupplier } from '../../../../../net/raphimc/minecraftauth/util/holder/IoSupplier.d.ts'
import type { ChangeListeners } from '../../../../../net/raphimc/minecraftauth/util/holder/listener/ChangeListeners.d.ts'
export class Holder<T extends Expirable> extends Object {
    constructor(arg0: () => T)
    constructor(arg0: () => T, arg1: Object)
    readonly changeListeners: ChangeListeners;
    // private lock: Object;
    // private supplier: () => T;
    // private value: T;
    getCached(): T;
    getChangeListeners(): ChangeListeners;
    getUpToDate(): T;
    getUpToDateAsync(): CompletableFuture<T>;
    getUpToDateUnchecked(): T;
    hasValue(): boolean;
    isExpired(): boolean;
    refresh(): T;
    refreshAsync(): CompletableFuture<T>;
    refreshIfExpired(): boolean;
    refreshIfExpiredAsync(): CompletableFuture<boolean>;
    refreshIfExpiredUnchecked(): boolean;
    refreshUnchecked(): T;
    set(arg0: T): void;
}