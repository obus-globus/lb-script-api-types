import type { Object } from '../../../java/lang/Object.d.ts'
import type { UnmodifiableMapCursor } from '../../../org/graalvm/collections/UnmodifiableMapCursor.d.ts'
export interface MapCursor<K extends unknown, V extends unknown> extends Object, UnmodifiableMapCursor<K, V>{
    remove(): void;
    setValue(newValue: V): V;
}