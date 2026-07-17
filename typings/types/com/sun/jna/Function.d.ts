import type { JavaMap } from '../../../JavaMap.d.ts'
import type { NativeLibrary } from '../../../com/sun/jna/NativeLibrary.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Function extends Pointer {
    static ALT_CONVENTION: number;
    static C_CONVENTION: number;
    static MAX_NARGS: number;
    static NULL: Pointer;
    static THROW_LAST_ERROR: number;
    static USE_VARARGS: number;
    static createConstant(paramarg0: number): Pointer;
    static getFunction(paramarg0: Pointer): Function;
    static getFunction(paramarg0: Pointer, paramarg1: number): Function;
    static getFunction(paramarg0: Pointer, paramarg1: number, paramarg2: string): Function;
    static getFunction(paramarg0: string, paramarg1: string): Function;
    static getFunction(paramarg0: string, paramarg1: string, paramarg2: number): Function;
    static getFunction(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: string): Function;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    constructor(arg0: NativeLibrary, arg1: string, arg2: number, arg3: string)
    constructor(arg0: Pointer, arg1: number, arg2: string)
    // private callFlags: number;
    // private encoding: string;
    // private functionName: string;
    // private library: NativeLibrary;
    // private options: JavaMap<string, Object | null>;
    // private checkCallingConvention(arg0: number): void;
    // private convertArgument(arg0: Object[], arg1: number, arg2: Method, arg3: TypeMapper, arg4: boolean, arg5: Class<Object>): Object;
    equals(arg0: Object | null): boolean;
    getCallingConvention(): number;
    getName(): string;
    hashCode(): number;
    invoke(arg0: Class<Object>, arg1: Object[]): Object;
    invoke(arg0: Class<Object>, arg1: Object[], arg2: JavaMap<string, Object | null>): Object;
    invoke(arg0: Method, arg1: Class<Object>[], arg2: Class<Object>, arg3: Object[], arg4: JavaMap<string, Object | null>): Object;
    invoke(arg0: Object[]): void;
    invoke(arg0: Object[], arg1: Class<Object>, arg2: boolean): Object;
    invoke(arg0: Object[], arg1: Class<Object>, arg2: boolean, arg3: number): Object;
    invokeDouble(arg0: Object[]): number;
    invokeFloat(arg0: Object[]): number;
    invokeInt(arg0: Object[]): number;
    invokeLong(arg0: Object[]): number;
    invokeObject(arg0: Object[]): Object;
    invokePointer(arg0: Object[]): Pointer;
    // private invokePointer(arg0: number, arg1: Object[]): Pointer;
    invokeString(arg0: Object[], arg1: boolean): string;
    // private invokeString(arg0: number, arg1: Object[], arg2: boolean): string;
    invokeVoid(arg0: Object[]): void;
    // private isPrimitiveArray(arg0: Class<Object>): boolean;
    toString(): string;
}