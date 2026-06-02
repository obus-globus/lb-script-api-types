import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class TemporalAddZonedDateTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    addZonedDateTime(epochNanoseconds: BigInt, timeZone: TruffleString, calendar: TruffleString, years: number, months: number, weeks: number, days: number, norm: BigInt, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject, options: JSDynamicObject, errorBranch: InlinedBranchProfile): BigInt;
    execute(epochNanoseconds: BigInt, timeZone: TruffleString, calendar: TruffleString, years: number, months: number, weeks: number, days: number, norm: BigInt, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject): BigInt;
    execute(epochNanoseconds: BigInt, timeZone: TruffleString, calendar: TruffleString, years: number, months: number, weeks: number, days: number, norm: BigInt, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject, options: JSDynamicObject): BigInt;
}