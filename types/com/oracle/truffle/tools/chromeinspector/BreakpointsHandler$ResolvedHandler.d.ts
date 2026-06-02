import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$ResolveListener } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ResolveListener.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { EventHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/events/EventHandler.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BreakpointsHandler$ResolvedHandler extends Object implements Breakpoint$ResolveListener {
    private constructor(null_: BreakpointsHandler$ResolvedHandler)
    // private eventHandler: () => EventHandler;
    breakpointResolved(breakpoint: Breakpoint, section: SourceSection): void;
}