import type { ThreadLocal } from '../../../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ObjectThreadContextMap } from '../../../../../../../org/apache/logging/log4j/spi/ObjectThreadContextMap.d.ts'
import type { ReadOnlyThreadContextMap } from '../../../../../../../org/apache/logging/log4j/spi/ReadOnlyThreadContextMap.d.ts'
import type { PropertiesUtil } from '../../../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class GarbageFreeSortedArrayThreadContextMap extends Object implements ObjectThreadContextMap, ReadOnlyThreadContextMap {
    static INHERITABLE_MAP: string;
    constructor()
    constructor(properties: PropertiesUtil)
    // private initialCapacity: number;
    // private localMap: ThreadLocal<StringMap>;
    clear(): void;
    containsKey(key: string): boolean;
    createStringMap(): StringMap;
    createStringMap(original: ReadOnlyStringMap): StringMap;
    equals(obj: Object | null): boolean;
    get(key: string): string;
    getCopy(): { [key: string]: string };
    getImmutableMapOrNull(): { [key: string]: string };
    getReadOnlyContextData(): StringMap;
    // private getThreadLocalMap(): StringMap;
    getValue<V extends unknown>(key: string): V;
    hashCode(): number;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    putAll(values: { [key: string]: string }): void;
    putAllValues<V extends unknown>(values: { [key: string]: V }): void;
    putValue(key: string, value: Object): void;
    remove(key: string): void;
    removeAll(keys: string[]): void;
    toString(): string;
}