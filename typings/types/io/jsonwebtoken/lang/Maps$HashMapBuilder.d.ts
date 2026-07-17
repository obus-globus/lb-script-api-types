import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Maps$MapBuilder } from '../../../io/jsonwebtoken/lang/Maps$MapBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Maps$HashMapBuilder<K extends unknown, V extends unknown> extends Object implements Maps$MapBuilder<K, V> {
    private constructor()
    // private data: JavaMap<K, V>;
    and(arg0: K, arg1: V): Maps$MapBuilder<K, V>;
    build(): JavaMap<K, V>;
}