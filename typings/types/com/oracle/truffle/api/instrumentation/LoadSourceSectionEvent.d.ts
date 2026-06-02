import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LoadSourceSectionEvent extends Object {
    constructor(sourceSection: SourceSection, node: Node)
    readonly node: Node;
    readonly sourceSection: SourceSection;
    getNode(): Node;
    getSourceSection(): SourceSection;
}