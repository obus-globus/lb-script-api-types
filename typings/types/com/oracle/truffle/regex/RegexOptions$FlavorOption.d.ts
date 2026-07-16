import type { RegexFlavor } from '../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RegexOptions$FlavorOption extends Enum<RegexOptions$FlavorOption> {
    static ECMAScript: RegexOptions$FlavorOption;
    static JavaUtilPattern: RegexOptions$FlavorOption;
    static OracleDB: RegexOptions$FlavorOption;
    static Python: RegexOptions$FlavorOption;
    static Ruby: RegexOptions$FlavorOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RegexOptions$FlavorOption;
    static values(): RegexOptions$FlavorOption[];
    private constructor()
    get(): RegexFlavor;
    name(): "ECMAScript" | "Python" | "Ruby" | "OracleDB" | "JavaUtilPattern";
}