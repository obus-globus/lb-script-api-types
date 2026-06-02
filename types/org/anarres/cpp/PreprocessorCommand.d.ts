import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PreprocessorCommand extends Enum<PreprocessorCommand> {
    static PP_DEFINE: PreprocessorCommand;
    static PP_ELIF: PreprocessorCommand;
    static PP_ELSE: PreprocessorCommand;
    static PP_ENDIF: PreprocessorCommand;
    static PP_ERROR: PreprocessorCommand;
    static PP_IF: PreprocessorCommand;
    static PP_IFDEF: PreprocessorCommand;
    static PP_IFNDEF: PreprocessorCommand;
    static PP_IMPORT: PreprocessorCommand;
    static PP_INCLUDE: PreprocessorCommand;
    static PP_INCLUDE_NEXT: PreprocessorCommand;
    static PP_LINE: PreprocessorCommand;
    static PP_PRAGMA: PreprocessorCommand;
    static PP_UNDEF: PreprocessorCommand;
    static PP_WARNING: PreprocessorCommand;
    static forText(paramarg0: string): PreprocessorCommand;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PreprocessorCommand;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private text: string;
    name(): "PP_DEFINE" | "PP_ELIF" | "PP_ELSE" | "PP_ENDIF" | "PP_ERROR" | "PP_IF" | "PP_IFDEF" | "PP_IFNDEF" | "PP_INCLUDE" | "PP_LINE" | "PP_PRAGMA" | "PP_UNDEF" | "PP_WARNING" | "PP_INCLUDE_NEXT" | "PP_IMPORT";
}