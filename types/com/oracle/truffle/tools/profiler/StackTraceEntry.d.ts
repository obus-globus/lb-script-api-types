import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StackTraceEntry extends Object {
    constructor(instrumenter: Instrumenter, context: EventContext, compilationTier: number, compilationRoot: boolean)
    constructor(instrumenter: Instrumenter, node: Node, compilationTier: number, compilationRoot: boolean)
    constructor(location: StackTraceEntry, compilationTier: number, compilationRoot: boolean)
    constructor(rootName: string)
    constructor(tags: Class<Object>[], sourceSection: SourceSection, root: RootNode, node: Node, compilationTier: number, compilationRoot: boolean)
    readonly compilationRoot: boolean;
    // private compilationTier: number;
    // private instrumentedNode: Node;
    // private isSynthetic: boolean;
    readonly rootName: string;
    readonly sourceSection: SourceSection;
    // private stackTraceElement: StackTraceElement;
    readonly tags: Class<Object>[];
    equals(obj: Object | null): boolean;
    // private formatFileName(): string;
    getInstrumentedNode(): Node;
    getRootName(): string;
    getSourceSection(): SourceSection;
    getTags(): Class<Object>[];
    getTier(): number;
    hashCode(): number;
    isCompilationRoot(): boolean;
    isCompiled(): boolean;
    isInlined(): boolean;
    isInterpreted(): boolean;
    isSynthetic(): boolean;
    toStackTraceElement(): StackTraceElement;
    toString(): string;
}