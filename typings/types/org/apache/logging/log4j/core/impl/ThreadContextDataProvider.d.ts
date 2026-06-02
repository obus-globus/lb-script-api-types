import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextDataProvider } from '../../../../../../org/apache/logging/log4j/core/util/ContextDataProvider.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class ThreadContextDataProvider extends Object implements ContextDataProvider {
    constructor()
    getValue(key: string): Object;
    supplyContextData(): { [key: string]: string };
    supplyStringMap(): StringMap;
    supplyStringMap(): StringMap;
}