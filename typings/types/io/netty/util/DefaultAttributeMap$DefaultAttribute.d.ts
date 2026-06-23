import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { DefaultAttributeMap } from '../../../io/netty/util/DefaultAttributeMap.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultAttributeMap$DefaultAttribute<T extends unknown> extends AtomicReference<T> implements Attribute<T> {
    constructor(arg0: DefaultAttributeMap, arg1: AttributeKey<T>)
    // private attributeMap: DefaultAttributeMap;
    // private key: AttributeKey<T>;
    getAndRemove(): T;
    // private isRemoved(): boolean;
    key(): AttributeKey<T>;
    remove(): void;
    setIfAbsent(arg0: T): T;
}