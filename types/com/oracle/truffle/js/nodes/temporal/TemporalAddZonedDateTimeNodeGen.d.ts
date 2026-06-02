import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TemporalAddZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddZonedDateTimeNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class TemporalAddZonedDateTimeNodeGen extends TemporalAddZonedDateTimeNode {
    static create(): TemporalAddZonedDateTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: BigInt, arg1Value: TruffleString, arg2Value: TruffleString, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: BigInt, arg8Value: JSTemporalPlainDateTimeObject, arg9Value: JSDynamicObject): BigInt;
}