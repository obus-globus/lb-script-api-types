import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CaseFoldData$CaseFoldAlgorithm extends Enum<CaseFoldData$CaseFoldAlgorithm> {
    static ECMAScriptUnicode: CaseFoldData$CaseFoldAlgorithm;
    static OracleDB: CaseFoldData$CaseFoldAlgorithm;
    static OracleDBAI: CaseFoldData$CaseFoldAlgorithm;
    static OracleDBSimple: CaseFoldData$CaseFoldAlgorithm;
    static PythonUnicode: CaseFoldData$CaseFoldAlgorithm;
    static Ruby: CaseFoldData$CaseFoldAlgorithm;
    static Unicode15Simple: CaseFoldData$CaseFoldAlgorithm;
    static Unicode16Simple: CaseFoldData$CaseFoldAlgorithm;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CaseFoldData$CaseFoldAlgorithm;
    static values(): (Object | null)[];
    private constructor()
    name(): "Unicode16Simple" | "Unicode15Simple" | "ECMAScriptUnicode" | "PythonUnicode" | "Ruby" | "OracleDB" | "OracleDBSimple" | "OracleDBAI";
}