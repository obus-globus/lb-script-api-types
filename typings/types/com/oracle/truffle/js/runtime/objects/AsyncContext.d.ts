import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncContext extends Object {
    static empty(): AsyncContext;
    private constructor()
    private constructor(mapping: Object[])
    // private mapping: Object[];
    getOrDefault(asyncContextKey: Symbol, defaultValue: Object): Object;
    toString(): string;
    withMapping(key: Symbol, value: Object): AsyncContext;
}