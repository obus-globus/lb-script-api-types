import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Maps$MapBuilder<K extends unknown, V extends unknown> extends Builder<JavaMap<K, V>>, Object{
    and(arg0: K, arg1: V): Maps$MapBuilder<K, V>;
    build(): JavaMap<K, V>;
}