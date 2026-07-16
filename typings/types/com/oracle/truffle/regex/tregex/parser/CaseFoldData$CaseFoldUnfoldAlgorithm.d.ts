import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CaseFoldData$CaseFoldUnfoldAlgorithm extends Enum<CaseFoldData$CaseFoldUnfoldAlgorithm> {
    static Ascii: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static ECMAScriptNonUnicode: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static ECMAScriptUnicode: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static JavaUnicode15: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static JavaUnicode16: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static OracleDBSimple: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static PythonUnicode: CaseFoldData$CaseFoldUnfoldAlgorithm;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CaseFoldData$CaseFoldUnfoldAlgorithm;
    static values(): CaseFoldData$CaseFoldUnfoldAlgorithm[];
    private constructor()
    getEqualsPredicate(): (param0: number, param1: number) => boolean;
    name(): "Ascii" | "ECMAScriptNonUnicode" | "ECMAScriptUnicode" | "JavaUnicode15" | "JavaUnicode16" | "OracleDBSimple" | "PythonUnicode";
}