import type { Object } from '../java/lang/Object.d.ts'
import type { DeepRecursiveScope } from '../kotlin/DeepRecursiveScope.d.ts'
import type { Function3 } from '../kotlin/jvm/functions/Function3.d.ts'
export class DeepRecursiveFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    constructor(block: Function3<Object, Object, Object, Object>)
    // private block: (param0: DeepRecursiveScope<T, R>, param1: T) => R;
    /*not mapped: */ getBlock$kotlin_stdlib(): (param0: DeepRecursiveScope<T, R>, param1: T) => R;
}