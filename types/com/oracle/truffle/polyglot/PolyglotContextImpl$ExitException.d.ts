import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { ThreadDeath } from '../../../../java/lang/ThreadDeath.d.ts'
export class PolyglotContextImpl$ExitException extends ThreadDeath {
    private constructor(location: Node, sourceSection: SourceSection, exitCode: number, exitMessage: string)
    constructor(location: Node, exitCode: number, exitMessage: string)
    constructor(sourceSection: SourceSection, exitCode: number, exitMessage: string)
    // private exitCode: number;
    // private exitMessage: string;
    // private location: Node;
    readonly message: string | null;
    // private sourceSection: SourceSection;
    getExitCode(): number;
    getLocation(): Node;
    getSourceLocation(): SourceSection;
}