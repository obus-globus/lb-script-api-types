import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { SlowPathException } from '../../../../../com/oracle/truffle/api/nodes/SlowPathException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Breakpoint$BreakpointConditionFailure extends SlowPathException {
    constructor(breakpoint: Breakpoint, cause: Throwable)
    readonly breakpoint: Breakpoint;
    getBreakpoint(): Breakpoint;
    getConditionFailure(): Throwable;
}