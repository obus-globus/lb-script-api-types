import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Method as Method_2 } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
export class Method extends Object {
    static getMethod(paramarg0: string): Method;
    static getMethod(paramarg0: string, paramarg1: boolean): Method;
    static getMethod(paramarg0: Constructor<Object>): Method;
    static getMethod(paramarg0: Method_2): Method;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: Type, arg2: Type[])
    readonly descriptor: string;
    readonly name: string;
    equals(arg0: Object | null): boolean;
    getArgumentTypes(): Type[];
    getDescriptor(): string;
    getName(): string;
    getReturnType(): Type;
    hashCode(): number;
    toString(): string;
}