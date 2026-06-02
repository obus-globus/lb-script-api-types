import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LifeCycle } from '../../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface Filterable extends Object, LifeCycle{
    addFilter(filter: Filter): void;
    getFilter(): Filter;
    hasFilter(): boolean;
    isFiltered(event: LogEvent): boolean;
    removeFilter(filter: Filter): void;
}