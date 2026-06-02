import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ExecutionEventNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { TextDocumentSurrogate } from '../../../../../../org/graalvm/tools/lsp/server/utils/TextDocumentSurrogate.d.ts'
export class CoverageEventNode extends ExecutionEventNode {
    constructor(instrumentedSection: SourceSection, instrumentedNode: Node, coverageUri: URI, func: (param0: URI) => TextDocumentSurrogate, creatorThreadId: number)
    // private child: Node;
    // private coverageUri: URI;
    // private creatorThreadId: number;
    // private entered: boolean;
    readonly instrumentedNode: Node;
    // private instrumentedSection: SourceSection;
    // private surrogateProvider: (param0: URI) => TextDocumentSurrogate;
    clearChild(): void;
    getInstrumentedNode(): Node;
    insertOrReplaceChild(node: Node): void;
    onEnter(frame: VirtualFrame): void;
    // private putSection2Uri(frame: MaterializedFrame): void;
}