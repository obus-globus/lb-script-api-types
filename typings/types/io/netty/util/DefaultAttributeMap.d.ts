import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { AttributeMap } from '../../../io/netty/util/AttributeMap.d.ts'
import type { DefaultAttributeMap$DefaultAttribute } from '../../../io/netty/util/DefaultAttributeMap$DefaultAttribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultAttributeMap extends Object implements AttributeMap {
    constructor()
    // private attributes: DefaultAttributeMap$DefaultAttribute<Object>[];
    attr<T extends Object | number | string | boolean>(arg0: AttributeKey<T>): Attribute<T>;
    hasAttr<T extends Object | number | string | boolean>(arg0: AttributeKey<T>): boolean;
    // private removeAttributeIfMatch<T extends Object | number | string | boolean>(arg0: AttributeKey<T>, arg1: DefaultAttributeMap$DefaultAttribute<T>): void;
}