import type { ForwardingMultimap } from '../../../../com/google/common/collect/ForwardingMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
export class PropertyMap extends ForwardingMultimap<string, Property> {
    static EMPTY: PropertyMap;
    constructor(arg0: Multimap<string, Property>)
    // private properties: Multimap<string, Property>;
    delegate(): Multimap<string, Property>;
}