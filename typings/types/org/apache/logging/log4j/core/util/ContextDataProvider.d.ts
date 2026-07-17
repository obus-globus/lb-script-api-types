import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface ContextDataProvider extends Object{
    getValue(key: string): Object;
    supplyContextData(): JavaMap<string, string>;
    supplyStringMap(): StringMap;
}