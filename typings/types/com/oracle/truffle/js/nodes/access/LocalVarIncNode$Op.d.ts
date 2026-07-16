import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LocalVarIncNode$Op extends Enum<LocalVarIncNode$Op> {
    static Dec: LocalVarIncNode$Op;
    static Inc: LocalVarIncNode$Op;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LocalVarIncNode$Op;
    static values(): LocalVarIncNode$Op[];
    private constructor(op: LocalVarIncNode$LocalVarOp)
    op: LocalVarIncNode$LocalVarOp;
    name(): "Inc" | "Dec";
}