import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { ThreadDeath } from '../../../../java/lang/ThreadDeath.d.ts'
export class PolyglotEngineImpl$CancelExecution extends ThreadDeath {
    constructor(location: Node, cancelMessage: string, resourceLimit: boolean)
    constructor(sourceSection: SourceSection, cancelMessage: string, resourceLimit: boolean)
    // private cancelMessage: string;
    // private location: Node;
    readonly message: string | null;
    readonly resourceLimit: boolean;
    // private sourceSection: SourceSection;
    getLocation(): Node;
    getSourceLocation(): SourceSection;
    isResourceLimit(): boolean;
}