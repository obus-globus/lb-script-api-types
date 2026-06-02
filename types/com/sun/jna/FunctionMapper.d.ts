import type { NativeLibrary } from '../../../com/sun/jna/NativeLibrary.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FunctionMapper extends Object{
    getFunctionName(arg0: NativeLibrary, arg1: Method): string;
}