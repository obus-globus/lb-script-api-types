import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface ThreadContextMap2 extends Object, ThreadContextMap{
    clear(): void;
    containsKey(key: string): boolean;
    get(key: string): string;
    getReadOnlyContextData(): StringMap;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    putAll(map: { [key: string]: string }): void;
    remove(key: string): void;
}