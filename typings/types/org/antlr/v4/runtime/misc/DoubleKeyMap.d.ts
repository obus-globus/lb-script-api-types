import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleKeyMap<Key1 extends Object | number | string | boolean, Key2 extends Object | number | string | boolean, Value extends Object | number | string | boolean> extends Object {
    constructor()
    // private data: Map<Key1, Map<Key2, Value>>;
    get(arg0: Key1): Map<Key2, Value>;
    get(arg0: Key1, arg1: Key2): Value;
    keySet(): Key1[];
    keySet(arg0: Key1): Key2[];
    put(arg0: Key1, arg1: Key2, arg2: Value): Value;
    values(arg0: Key1): Value[];
}