import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DoubleKeyMap<Key1 extends unknown, Key2 extends unknown, Value extends unknown> extends Object {
    constructor()
    // private data: Map<Key1, Map<Key2, Value>>;
    get(arg0: Key1, arg1: Key2): Value;
    put(arg0: Key1, arg1: Key2, arg2: Value): Value;
}