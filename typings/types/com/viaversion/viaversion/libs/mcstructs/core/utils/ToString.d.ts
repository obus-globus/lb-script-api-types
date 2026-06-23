import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ToString extends Object {
    static of(paramarg0: Class<Object>): ToString;
    static of(paramarg0: Object): ToString;
    private constructor(arg0: Class<Object>)
    // private clazz: Class<Object>;
    // private fields: string[];
    add<T extends unknown>(arg0: string, arg1: T): ToString;
    add<T extends unknown>(arg0: string, arg1: T, arg2: (param0: T) => boolean): ToString;
    add<T extends unknown>(arg0: string, arg1: T, arg2: (param0: T) => boolean, arg3: (param0: T) => string): ToString;
    put<T extends unknown>(arg0: string, arg1: T): ToString;
    put<T extends unknown>(arg0: string, arg1: T, arg2: (param0: T) => boolean): ToString;
    toString(): string;
}