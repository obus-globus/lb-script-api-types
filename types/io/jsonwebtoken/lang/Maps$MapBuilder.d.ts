import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Maps$MapBuilder<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Builder<Map<K, V>>, Object{
    and(arg0: K, arg1: V): Maps$MapBuilder<K, V>;
    build(): Map<K, V>;
}