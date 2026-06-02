import type { ObjectOutputStream$HandleTable } from '../../java/io/ObjectOutputStream$HandleTable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectOutputStream$ReplaceTable extends Object {
    constructor(arg0: number, arg1: number)
    // private htab: ObjectOutputStream$HandleTable;
    // private reps: Object[];
    assign(arg0: Object, arg1: Object): void;
    clear(): void;
    // private grow(): void;
    lookup(arg0: Object): Object;
    size(): number;
}