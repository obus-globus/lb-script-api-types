import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Interner<T extends unknown> extends Object {
    // private firstIndex: number;
    // private interned: JavaMap<T, number>;
    // private parent: Interner<T>;
    // private find(arg0: T): number;
    intern(arg0: T): number;
}