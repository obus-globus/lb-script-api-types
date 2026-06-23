import type { Maps$MapBuilder } from '../../../io/jsonwebtoken/lang/Maps$MapBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Maps$HashMapBuilder<K extends unknown, V extends unknown> extends Object implements Maps$MapBuilder<K, V> {
    private constructor()
    // private data: Map<K, V>;
    and(arg0: K, arg1: V): Maps$MapBuilder<K, V>;
    build(): Map<K, V>;
}