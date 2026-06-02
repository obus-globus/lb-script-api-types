import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractLifeCycle } from '../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Filterable } from '../../../../../../org/apache/logging/log4j/core/filter/Filterable.d.ts'
export abstract class AbstractFilterable extends AbstractLifeCycle implements Filterable {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor()
    constructor(filter: Filter)
    constructor(filter: Filter, propertyArray: Property[])
    readonly filter: Filter;
    readonly propertyArray: Property[];
    addFilter(filter: Filter): void;
    getFilter(): Filter;
    getPropertyArray(): Property[];
    hasFilter(): boolean;
    isFiltered(event: LogEvent): boolean;
    removeFilter(filter: Filter): void;
    start(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
}