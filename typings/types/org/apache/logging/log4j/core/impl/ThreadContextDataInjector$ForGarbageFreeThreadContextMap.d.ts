import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { ThreadContextDataInjector$AbstractContextDataInjector } from '../../../../../../org/apache/logging/log4j/core/impl/ThreadContextDataInjector$AbstractContextDataInjector.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class ThreadContextDataInjector$ForGarbageFreeThreadContextMap extends ThreadContextDataInjector$AbstractContextDataInjector {
    constructor()
    injectContextData(props: Property[], reusable: StringMap): StringMap;
    rawContextData(): ReadOnlyStringMap;
}