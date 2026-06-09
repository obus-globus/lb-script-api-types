import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiConsumer } from '../../../../../org/apache/logging/log4j/util/BiConsumer.d.ts'
import type { TriConsumer } from '../../../../../org/apache/logging/log4j/util/TriConsumer.d.ts'
export interface ReadOnlyStringMap extends Serializable, Object {
    containsKey(key: string): boolean;
    forEach(action: (param0: string, param1: V) => void): void;
    forEach<S extends Object | number | string | boolean>(action: TriConsumer<string, V, S>, state: S): void;
    getValue<V extends Object | number | string | boolean>(key: string): V;
    isEmpty(): boolean;
    size(): number;
    toMap(): { [key: string]: string };
}