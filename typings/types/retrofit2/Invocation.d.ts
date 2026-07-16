import type { Class } from '../java/lang/Class.d.ts'
import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Invocation extends Object {
    static of<T extends unknown>(paramarg0: Class<T>, paramarg1: T, paramarg2: Method, paramarg3: Object[]): Invocation;
    static of(paramarg0: Method, paramarg1: Object[]): Invocation;
    constructor(arg0: Class<Object>, arg1: Object, arg2: Method, arg3: (Object | null)[])
    // private arguments: (Object | null)[];
    // private instance: Object;
    // private method: Method;
    // private service: Class<Object>;
    arguments(): (Object | null)[];
    instance(): Object;
    method(): Method;
    service(): Class<Object>;
    toString(): string;
}