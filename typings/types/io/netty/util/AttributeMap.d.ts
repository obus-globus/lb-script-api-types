import type { Attribute } from '../../../io/netty/util/Attribute.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AttributeMap extends Object{
    attr(arg0: AttributeKey<T>): Attribute<T>;
    hasAttr(arg0: AttributeKey<T>): boolean;
}