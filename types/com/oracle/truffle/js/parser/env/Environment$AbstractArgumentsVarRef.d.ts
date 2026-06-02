import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$AbstractFrameVarRef } from '../../../../../../com/oracle/truffle/js/parser/env/Environment$AbstractFrameVarRef.d.ts'
export abstract class Environment$AbstractArgumentsVarRef extends Environment$AbstractFrameVarRef {
    constructor(null_: Environment$AbstractArgumentsVarRef, scopeLevel: number, frameLevel: number, name: TruffleString, current: Environment)
    getFrameSlot(): JSFrameSlot;
}