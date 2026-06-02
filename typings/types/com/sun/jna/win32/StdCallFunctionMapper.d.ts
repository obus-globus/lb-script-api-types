import type { FunctionMapper } from '../../../../com/sun/jna/FunctionMapper.d.ts'
import type { NativeLibrary } from '../../../../com/sun/jna/NativeLibrary.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StdCallFunctionMapper extends Object implements FunctionMapper {
    constructor()
    getArgumentNativeStackSize(arg0: Class<Object>): number;
    getFunctionName(arg0: NativeLibrary, arg1: Method): string;
}