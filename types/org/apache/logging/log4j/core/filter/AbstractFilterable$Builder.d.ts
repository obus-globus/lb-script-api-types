import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export abstract class AbstractFilterable$Builder<B extends AbstractFilterable$Builder<B>> extends Object {
    constructor()
    readonly filter: Filter;
    readonly propertyArray: Property[];
    asBuilder(): B;
    getFilter(): Filter;
    getPropertyArray(): Property[];
    setFilter(filter: Filter): B;
    setPropertyArray(properties: Property[]): B;
    withFilter(filter: Filter): B;
}