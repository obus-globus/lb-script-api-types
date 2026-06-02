import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectOutputStream$HandleTable extends Object {
    constructor(arg0: number, arg1: number)
    // private loadFactor: number;
    // private next: number[];
    // private objs: Object[];
    // private size: number;
    // private spine: number[];
    // private threshold: number;
    assign(arg0: Object): number;
    clear(): void;
    // private growEntries(): void;
    // private growSpine(): void;
    // private hash(arg0: Object): number;
    // private insert(arg0: Object, arg1: number): void;
    lookup(arg0: Object): number;
    size(): number;
}