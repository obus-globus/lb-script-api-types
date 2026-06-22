import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LifeCycle } from '../../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LifeCycle$State } from '../../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface Filterable extends Object, LifeCycle{
    addFilter(filter: Filter): void;
    getFilter(): Filter;
    getState(): LifeCycle$State;
    hasFilter(): boolean;
    initialize(): void;
    isFiltered(event: LogEvent): boolean;
    isStarted(): boolean;
    isStopped(): boolean;
    removeFilter(filter: Filter): void;
    start(): void;
    stop(): void;
}