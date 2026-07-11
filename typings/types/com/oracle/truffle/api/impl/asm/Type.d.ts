import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Constructor } from '../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static getArgumentCount(parammethodDescriptor: string): number;
    static getArgumentTypes(parammethodDescriptor: string): (Object | null)[];
    static getArgumentTypes(parammethod: Method): (Object | null)[];
    static getArgumentsAndReturnSizes(parammethodDescriptor: string): number;
    static getConstructorDescriptor(paramconstructor: Constructor<Object>): string;
    static getDescriptor(paramclazz: Class<Object>): string;
    static getInternalName(paramclazz: Class<Object>): string;
    static getMethodDescriptor(paramreturnType: Type, ...paramargumentTypes: (Object | null)[]): string;
    static getMethodDescriptor(parammethod: Method): string;
    static getMethodType(paramreturnType: Type, ...paramargumentTypes: (Object | null)[]): Type;
    static getMethodType(parammethodDescriptor: string): Type;
    static getObjectType(paraminternalName: string): Type;
    static getReturnType(parammethodDescriptor: string): Type;
    static getReturnType(parammethod: Method): Type;
    static getType(paramclazz: Class<Object>): Type;
    static getType(paramtypeDescriptor: string): Type;
    static getType(paramconstructor: Constructor<Object>): Type;
    static getType(parammethod: Method): Type;
    private constructor(sort: number, valueBuffer: string, valueBegin: number, valueEnd: number)
    readonly sort: number;
    // private valueBegin: number;
    // private valueBuffer: string;
    // private valueEnd: number;
    // private appendDescriptor(stringBuilder: StringBuilder): void;
    equals(object: Object | null): boolean;
    getArgumentCount(): number;
    getArgumentTypes(): Type[];
    getArgumentsAndReturnSizes(): number;
    getClassName(): string;
    getDescriptor(): string;
    getDimensions(): number;
    getElementType(): Type;
    getInternalName(): string;
    getOpcode(opcode: number): number;
    getReturnType(): Type;
    getSize(): number;
    getSort(): number;
    hashCode(): number;
    toString(): string;
}