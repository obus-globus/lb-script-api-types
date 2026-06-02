import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NearestSectionsFinder$NodeLocationType } from '../../../../../../org/graalvm/tools/lsp/server/utils/NearestSectionsFinder$NodeLocationType.d.ts'
export class NearestNode extends Object {
    constructor(nearestNode: Node, sourceSection: SourceSection, locationType: NearestSectionsFinder$NodeLocationType)
    readonly locationType: NearestSectionsFinder$NodeLocationType;
    // private nearestNode: Node;
    readonly sourceSection: SourceSection;
    getLocationType(): NearestSectionsFinder$NodeLocationType;
    getNode(): Node;
    getSourceSection(): SourceSection;
}