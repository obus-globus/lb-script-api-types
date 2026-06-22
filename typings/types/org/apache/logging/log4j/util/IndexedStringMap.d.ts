import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IndexedReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/IndexedReadOnlyStringMap.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export interface IndexedStringMap extends Object, IndexedReadOnlyStringMap, StringMap{
    clear(): void;
    containsKey(key: string): boolean;
    freeze(): void;
    getKeyAt(index: number): string;
    indexOfKey(key: string): number;
    isEmpty(): boolean;
    isFrozen(): boolean;
    putAll(source: ReadOnlyStringMap): void;
    putValue(key: string, value: Object): void;
    remove(key: string): void;
    size(): number;
}