import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
export interface IndexedReadOnlyStringMap extends Object, ReadOnlyStringMap{
    containsKey(key: string): boolean;
    getKeyAt(index: number): string;
    getValueAt<V extends unknown>(index: number): V;
    indexOfKey(key: string): number;
    isEmpty(): boolean;
    size(): number;
}