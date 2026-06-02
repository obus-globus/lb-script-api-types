import type { FunctionMapper } from '../../../../com/sun/jna/FunctionMapper.d.ts'
import type { NativeLibrary } from '../../../../com/sun/jna/NativeLibrary.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class W32APIFunctionMapper extends Object implements FunctionMapper {
    static ASCII: FunctionMapper;
    static UNICODE: FunctionMapper;
    constructor(arg0: boolean)
    // private suffix: string;
    getFunctionName(arg0: NativeLibrary, arg1: Method): string;
}