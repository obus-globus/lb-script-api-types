import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
export interface StringMap extends Object, ReadOnlyStringMap{
    clear(): void;
    containsKey(key: string): boolean;
    freeze(): void;
    isEmpty(): boolean;
    isFrozen(): boolean;
    putAll(source: ReadOnlyStringMap): void;
    putValue(key: string, value: Object): void;
    remove(key: string): void;
    size(): number;
}