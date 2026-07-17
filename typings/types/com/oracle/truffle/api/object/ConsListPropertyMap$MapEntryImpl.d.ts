import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ConsListPropertyMap$MapEntryImpl extends Object implements Map$Entry<Object, Property> {
    constructor(backingProperty: Property)
    // private backingProperty: Property;
    readonly key: Object;
    readonly value: Property;
    setValue(value: Property): Property;
}