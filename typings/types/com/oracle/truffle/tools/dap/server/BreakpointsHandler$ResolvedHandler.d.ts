import type { Breakpoint } from '../../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$ResolveListener } from '../../../../../../com/oracle/truffle/api/debug/Breakpoint$ResolveListener.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BreakpointsHandler$ResolvedHandler extends Object implements Breakpoint$ResolveListener {
    private constructor(null_: BreakpointsHandler$ResolvedHandler)
    breakpointResolved(breakpoint: Breakpoint, section: SourceSection): void;
}