import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Breakpoint$ResolveListener extends Object{
    breakpointResolved(breakpoint: Breakpoint, section: SourceSection): void;
}