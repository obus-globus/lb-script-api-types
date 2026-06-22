import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CleanableThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/CleanableThreadContextMap.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface ObjectThreadContextMap extends Object, CleanableThreadContextMap{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getReadOnlyContextData(): StringMap;
    getValue<V extends Object | number | string | boolean>(key: string): V;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    putAllValues<V extends Object | number | string | boolean>(values: { [key: string]: V }): void;
    putValue<V extends Object | number | string | boolean>(key: string, value: V): void;
    remove(key: string): void;
}