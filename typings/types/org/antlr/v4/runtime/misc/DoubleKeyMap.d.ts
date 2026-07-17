import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleKeyMap<Key1 extends unknown, Key2 extends unknown, Value extends unknown> extends Object {
    constructor()
    // private data: JavaMap<Key1, JavaMap<Key2, Value>>;
    get(arg0: Key1): JavaMap<Key2, Value>;
    get(arg0: Key1, arg1: Key2): Value;
    keySet(): Key1[];
    keySet(arg0: Key1): Key2[];
    put(arg0: Key1, arg1: Key2, arg2: Value): Value;
    values(arg0: Key1): Value[];
}