import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiConsumer } from '../../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
import type { TriConsumer } from '../../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export class JdkMapAdapterStringMap extends Object implements StringMap {
    constructor()
    constructor(map: { [key: string]: string })
    constructor(map: { [key: string]: string }, frozen: boolean)
    // private immutable: boolean;
    // private map: { [key: string]: string };
    // private sortedKeys: string[];
    // private assertNotFrozen(): void;
    clear(): void;
    containsKey(key: string): boolean;
    equals(object: Object | null): boolean;
    forEach<V extends Object | number | string | boolean>(action: (param0: string, param1: V) => void): void;
    forEach<V extends Object | number | string | boolean, S extends Object | number | string | boolean>(action: TriConsumer<string, V, S>, state: S): void;
    freeze(): void;
    // private getSortedKeys(): string[];
    getValue<V extends Object | number | string | boolean>(key: string): V;
    hashCode(): number;
    isEmpty(): boolean;
    isFrozen(): boolean;
    putAll(source: ReadOnlyStringMap): void;
    putValue(key: string, value: Object): void;
    remove(key: string): void;
    size(): number;
    toMap(): { [key: string]: string };
    toString(): string;
}