import type { Class } from '../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Type extends Object {
    static ARRAY: number;
    static BOOLEAN: number;
    static BOOLEAN_TYPE: Type;
    static BYTE: number;
    static BYTE_TYPE: Type;
    static CHAR: number;
    static CHAR_TYPE: Type;
    static DOUBLE: number;
    static DOUBLE_TYPE: Type;
    static FLOAT: number;
    static FLOAT_TYPE: Type;
    static INT: number;
    static INT_TYPE: Type;
    static LONG: number;
    static LONG_TYPE: Type;
    static METHOD: number;
    static OBJECT: number;
    static SHORT: number;
    static SHORT_TYPE: Type;
    static VOID: number;
    static VOID_TYPE: Type;
    static getArgumentCount(paramarg0: string): number;
    static getArgumentTypes(paramarg0: string): Type[];
    static getArgumentTypes(paramarg0: Method): Type[];
    static getArgumentsAndReturnSizes(paramarg0: string): number;
    static getConstructorDescriptor(paramarg0: Constructor<Object>): string;
    static getDescriptor(paramarg0: Class<Object>): string;
    static getInternalName(paramarg0: Class<Object>): string;
    static getMethodDescriptor(paramarg0: Method): string;
    static getMethodDescriptor(paramarg0: Type, ...paramarg1: Type[]): string;
    static getMethodType(paramarg0: string): Type;
    static getMethodType(paramarg0: Type, ...paramarg1: Type[]): Type;
    static getObjectType(paramarg0: string): Type;
    static getReturnType(paramarg0: string): Type;
    static getReturnType(paramarg0: Method): Type;
    static getType(paramarg0: Class<Object>): Type;
    static getType(paramarg0: string): Type;
    static getType(paramarg0: Constructor<Object>): Type;
    static getType(paramarg0: Method): Type;
    private constructor(arg0: number, arg1: string, arg2: number, arg3: number)
    readonly sort: number;
    // private valueBegin: number;
    // private valueBuffer: string;
    // private valueEnd: number;
    // private appendDescriptor(arg0: StringBuilder): void;
    equals(arg0: Object | null): boolean;
    getArgumentCount(): number;
    getArgumentTypes(): Type[];
    getArgumentsAndReturnSizes(): number;
    getClassName(): string;
    getDescriptor(): string;
    getDimensions(): number;
    getElementType(): Type;
    getInternalName(): string;
    getOpcode(arg0: number): number;
    getReturnType(): Type;
    getSize(): number;
    getSort(): number;
    hashCode(): number;
    toString(): string;
}