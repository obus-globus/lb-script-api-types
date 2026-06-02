import type { Type } from '../../../../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { Constructor } from '../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Method extends Object {
    static getMethod(parammethod: string): Method;
    static getMethod(parammethod: string, paramdefaultPackage: boolean): Method;
    static getMethod(paramconstructor: Constructor<Object>): Method;
    static getMethod(parammethod: Method): Method;
    constructor(name: string, returnType: Type, argumentTypes: Type[])
    constructor(name: string, descriptor: string)
    readonly descriptor: string;
    readonly name: string;
    equals(other: Object | null): boolean;
    getArgumentTypes(): Type[];
    getDescriptor(): string;
    getName(): string;
    getReturnType(): Type;
    hashCode(): number;
    toString(): string;
}