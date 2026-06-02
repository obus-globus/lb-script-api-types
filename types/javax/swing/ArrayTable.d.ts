import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class ArrayTable extends Object implements Cloneable {
    constructor()
    // private table: Object;
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    get(arg0: Object): Object;
    getKeys(arg0: Object[]): Object[];
    // private grow(): void;
    // private isArray(): boolean;
    put(arg0: Object, arg1: Object): void;
    remove(arg0: Object): Object;
    // private shrink(): void;
    size(): number;
}