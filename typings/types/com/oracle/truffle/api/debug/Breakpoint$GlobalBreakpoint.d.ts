import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { Breakpoint$Builder } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Builder.d.ts'
import type { Breakpoint$ExceptionBuilder } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$ExceptionBuilder.d.ts'
import type { Breakpoint$Kind } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$Kind.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
export class Breakpoint$GlobalBreakpoint extends Breakpoint {
    static newBuilder(paramsource: Source): Breakpoint$Builder;
    static newBuilder(paramsourceSection: SourceSection): Breakpoint$Builder;
    static newBuilder(paramsourceUri: URI): Breakpoint$Builder;
    static newExceptionBuilder(paramcaught: boolean, paramuncaught: boolean): Breakpoint$ExceptionBuilder;
    constructor(delegate: Breakpoint)
    // private delegate: Breakpoint;
    dispose(): void;
    getCondition(): string;
    getHitCount(): number;
    getIgnoreCount(): number;
    getKind(): Breakpoint$Kind;
    getLocationDescription(): string;
    getSuspendAnchor(): SuspendAnchor;
    isDisposed(): boolean;
    isEnabled(): boolean;
    isModifiable(): boolean;
    isOneShot(): boolean;
    isResolved(): boolean;
    setCondition(expression: string): void;
    setEnabled(enabled: boolean): void;
    setIgnoreCount(ignoreCount: number): void;
}