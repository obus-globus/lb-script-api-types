import type { JavaMap } from '../../JavaMap.d.ts'
import type { HashMap$Node } from '../../java/util/HashMap$Node.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class HashMap$HashMapSpliterator<K extends unknown, V extends unknown> extends Object {
    constructor(arg0: JavaMap<K, V>, arg1: number, arg2: number, arg3: number, arg4: number)
    // private current: HashMap$Node<K, V>;
    // private est: number;
    // private expectedModCount: number;
    // private fence: number;
    // private index: number;
    // private map: JavaMap<K, V>;
    estimateSize(): number;
    getFence(): number;
}