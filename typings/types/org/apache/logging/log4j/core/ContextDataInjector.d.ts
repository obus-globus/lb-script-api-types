import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Property } from '../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface ContextDataInjector extends Object{
    getValue(key: string): Object;
    injectContextData(properties: Property[], reusable: StringMap): StringMap;
    rawContextData(): ReadOnlyStringMap;
}