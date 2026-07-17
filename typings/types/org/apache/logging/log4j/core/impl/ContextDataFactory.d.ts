import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class ContextDataFactory extends Object {
    static createContextData(): StringMap;
    static createContextData(paraminitialCapacity: number): StringMap;
    static createContextData(paramcontext: JavaMap<string, string>): StringMap;
    static createContextData(paramreadOnlyStringMap: ReadOnlyStringMap): StringMap;
    static emptyFrozenContextData(): StringMap;
    constructor()
}