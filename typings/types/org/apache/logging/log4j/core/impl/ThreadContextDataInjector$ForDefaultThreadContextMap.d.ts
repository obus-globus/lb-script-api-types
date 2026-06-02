import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { ThreadContextDataInjector$AbstractContextDataInjector } from '../../../../../../org/apache/logging/log4j/core/impl/ThreadContextDataInjector$AbstractContextDataInjector.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class ThreadContextDataInjector$ForDefaultThreadContextMap extends ThreadContextDataInjector$AbstractContextDataInjector {
    constructor()
    injectContextData(props: Property[], ignore: StringMap): StringMap;
    rawContextData(): ReadOnlyStringMap;
}