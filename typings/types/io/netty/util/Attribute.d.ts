import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Attribute<T extends unknown> extends Object{
    compareAndSet(arg0: T, arg1: T): boolean;
    get(): T;
    getAndRemove(): T;
    getAndSet(arg0: T): T;
    key(): AttributeKey<T>;
    remove(): void;
    set(arg0: T): void;
    setIfAbsent(arg0: T): T;
}