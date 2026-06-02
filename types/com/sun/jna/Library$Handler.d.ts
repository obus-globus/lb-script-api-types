import type { InvocationMapper } from '../../../com/sun/jna/InvocationMapper.d.ts'
import type { Library$Handler$FunctionInfo } from '../../../com/sun/jna/Library$Handler$FunctionInfo.d.ts'
import type { NativeLibrary } from '../../../com/sun/jna/NativeLibrary.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { InvocationHandler } from '../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Library$Handler extends Object implements InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, paramarg2: (Object | null)[]): Object;
    constructor(arg0: string, arg1: Class<Object>, arg2: { [key: string]: Object | null })
    // private functions: Map<Method, Library$Handler$FunctionInfo>;
    readonly interfaceClass: Class<Object>;
    // private invocationMapper: InvocationMapper;
    readonly nativeLibrary: NativeLibrary;
    // private options: { [key: string]: Object };
    getInterfaceClass(): Class<Object>;
    getLibraryName(): string;
    getNativeLibrary(): NativeLibrary;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
}