import type { FunctionMapper } from '../../../../../com/sun/jna/FunctionMapper.d.ts'
import type { StdCallLibrary } from '../../../../../com/sun/jna/win32/StdCallLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AccCtrl extends Object implements StdCallLibrary {
    static FUNCTION_MAPPER: FunctionMapper;
    static OPTION_ALLOW_OBJECTS: string;
    static OPTION_CALLING_CONVENTION: string;
    static OPTION_CLASSLOADER: string;
    static OPTION_FUNCTION_MAPPER: string;
    static OPTION_INVOCATION_MAPPER: string;
    static OPTION_OPEN_FLAGS: string;
    static OPTION_STRING_ENCODING: string;
    static OPTION_STRUCTURE_ALIGNMENT: string;
    static OPTION_SYMBOL_PROVIDER: string;
    static OPTION_TYPE_MAPPER: string;
    static STDCALL_CONVENTION: number;
    constructor()
}