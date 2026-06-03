import type { Object } from '../java/lang/Object.d.ts'
import type { DeepRecursiveScope } from '../kotlin/DeepRecursiveScope.d.ts'
export class DeepRecursiveFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    constructor(block: (param0: DeepRecursiveScope<T, R>, param1: T) => R)
    // private block: (param0: DeepRecursiveScope<T, R>, param1: T) => R;
    /*not mapped: */ getBlock$kotlin_stdlib(): (param0: DeepRecursiveScope<T, R>, param1: T) => R;
}