import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$ResolveListener } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ResolveListener.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Breakpoint$Builder extends Object {
    private constructor(null_: Breakpoint, key: SourceSection)
    private constructor(null_: Breakpoint, key: Object)
    // private anchor: SuspendAnchor;
    // private column: number;
    // private ignoreCount: number;
    // private key: Object;
    // private line: number;
    // private oneShot: boolean;
    // private resolveListener: Breakpoint$ResolveListener;
    // private rootInstance: DebugValue;
    // private sourceElements: SourceElement[];
    // private sourceSection: SourceSection;
    build(): Breakpoint;
    columnIs(column: number): Breakpoint$Builder;
    ignoreCount(ignoreCount: number): Breakpoint$Builder;
    lineIs(line: number): Breakpoint$Builder;
    oneShot(): Breakpoint$Builder;
    resolveListener(resolveListener: Breakpoint$ResolveListener): Breakpoint$Builder;
    rootInstance(rootInstance: DebugValue): Breakpoint$Builder;
    sourceElements(...sourceElements: SourceElement[]): Breakpoint$Builder;
    suspendAnchor(anchor: SuspendAnchor): Breakpoint$Builder;
}