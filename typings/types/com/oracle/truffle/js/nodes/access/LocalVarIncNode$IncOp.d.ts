import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class LocalVarIncNode$IncOp extends LocalVarIncNode$LocalVarOp {
    constructor()
    doBigInt(value: BigInt): BigInt;
    doDouble(value: number): number;
    doInt(value: number): number;
    doNumber(numValue: Number, node: Node, isIntegerProfile: InlinedConditionProfile, isBoundaryValue: InlinedConditionProfile): Number;
    doSafeInteger(value: SafeInteger): SafeInteger;
    getOverloadedOperatorName(): TruffleString;
}