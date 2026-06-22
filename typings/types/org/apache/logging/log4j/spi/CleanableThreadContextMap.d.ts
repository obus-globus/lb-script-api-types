import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap2 } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap2.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface CleanableThreadContextMap extends Object, ThreadContextMap2{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getReadOnlyContextData(): StringMap;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    remove(key: string): void;
    removeAll(keys: string[]): void;
}