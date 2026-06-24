import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspensionFilter } from '../../../../../com/oracle/truffle/api/debug/SuspensionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Breakpoint$ExceptionBuilder extends Object {
    constructor(null_: Breakpoint, caught: boolean, uncaught: boolean)
    // private caught: boolean;
    // private sourceElements: SourceElement[];
    // private suspensionFilter: SuspensionFilter;
    // private uncaught: boolean;
    build(): Breakpoint;
    sourceElements(sourceElements: SourceElement[]): Breakpoint$ExceptionBuilder;
    suspensionFilter(filter: SuspensionFilter): Breakpoint$ExceptionBuilder;
}