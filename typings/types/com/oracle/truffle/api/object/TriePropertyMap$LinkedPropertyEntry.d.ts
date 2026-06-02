import type { LinkedImmutableMap$LinkedEntry } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedEntry.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TriePropertyMap$LinkedPropertyEntry extends Object implements LinkedImmutableMap$LinkedEntry<Object, Property> {
    constructor(value: Property, prevKey: Object, nextKey: Object)
    readonly key: Object;
    readonly nextKey: Object;
    readonly prevKey: Object;
    readonly value: Property;
    readonly value: Property;
    equals(obj: Object | null): boolean;
    getNextKey(): Object;
    getPrevKey(): Object;
    hashCode(): number;
    setValue(value: Property): Property;
    toString(): string;
    withNextKey(nextKey: Object): TriePropertyMap$LinkedPropertyEntry;
    withPrevKey(prevKey: Object): TriePropertyMap$LinkedPropertyEntry;
    withValue(value: Property): TriePropertyMap$LinkedPropertyEntry;
}