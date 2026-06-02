import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class ThreadContextDataInjector extends Object {
    static contextDataProviders: E[];
    static copyProperties(paramproperties: Property[], paramresult: StringMap): void;
    static initServiceProviders(): void;
    constructor()
}