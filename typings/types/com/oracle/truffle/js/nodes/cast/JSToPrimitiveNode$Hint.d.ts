import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSToPrimitiveNode$Hint extends Enum<JSToPrimitiveNode$Hint> {
    static Default: JSToPrimitiveNode$Hint;
    static Number: JSToPrimitiveNode$Hint;
    static String: JSToPrimitiveNode$Hint;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSToPrimitiveNode$Hint;
    static values(): JSToPrimitiveNode$Hint[];
    private constructor(hintName: TruffleString)
    readonly hintName: TruffleString;
    getHintName(): TruffleString;
    getOrdinaryToPrimitiveHint(): JSToPrimitiveNode$Hint;
    name(): "Default" | "Number" | "String";
}