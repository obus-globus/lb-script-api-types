import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
import type { BiConsumer } from '../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { PropertiesUtil } from '../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
import type { ReadOnlyStringMap } from '../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { TriConsumer } from '../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export class DefaultThreadContextMap extends Object implements ThreadContextMap, ReadOnlyStringMap {
    static INHERITABLE_MAP: string;
    constructor()
    constructor(ignored: boolean)
    constructor(properties: PropertiesUtil)
    // private localState: ThreadLocal<Object[]>;
    clear(): void;
    containsKey(key: string): boolean;
    equals(obj: Object | null): boolean;
    forEach<V extends unknown>(action: (param0: string, param1: V) => void): void;
    forEach<V extends unknown, S extends unknown>(action: TriConsumer<string, V, S>, state: S): void;
    get(key: string): string;
    getCopy(): { [key: string]: string };
    getImmutableMapOrNull(): { [key: string]: string };
    getValue<V extends unknown>(key: string): V;
    hashCode(): number;
    isEmpty(): boolean;
    put(key: string, value: string): void;
    putAll(m: { [key: string]: string }): void;
    remove(key: string): void;
    removeAll(keys: string[]): void;
    size(): number;
    toMap(): { [key: string]: string };
    toString(): string;
}