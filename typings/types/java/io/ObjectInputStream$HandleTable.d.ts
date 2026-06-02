import type { ObjectInputStream$HandleTable$HandleList } from '../../java/io/ObjectInputStream$HandleTable$HandleList.d.ts'
import type { ClassNotFoundException } from '../../java/lang/ClassNotFoundException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectInputStream$HandleTable extends Object {
    constructor(arg0: number)
    // private deps: ObjectInputStream$HandleTable$HandleList[];
    // private entries: Object[];
    // private lowDep: number;
    // private size: number;
    // private status: number[];
    assign(arg0: Object): number;
    clear(): void;
    finish(arg0: number): void;
    // private grow(): void;
    lookupException(arg0: number): ClassNotFoundException;
    lookupObject(arg0: number): Object;
    markDependency(arg0: number, arg1: number): void;
    markException(arg0: number, arg1: ClassNotFoundException): void;
    setObject(arg0: number, arg1: Object): void;
    size(): number;
}