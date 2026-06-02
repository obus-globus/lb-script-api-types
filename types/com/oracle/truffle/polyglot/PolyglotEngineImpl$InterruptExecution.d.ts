import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export class PolyglotEngineImpl$InterruptExecution extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(location: Node)
    private constructor(location: Node, sourceSection: SourceSection)
    constructor(sourceSection: SourceSection)
    readonly sourceSection: SourceSection;
    getExceptionType(): ExceptionType;
    getSourceSection(): SourceSection;
    hasSourceLocation(): boolean;
}