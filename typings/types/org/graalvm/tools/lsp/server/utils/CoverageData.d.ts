import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CoverageEventNode } from '../../../../../../org/graalvm/tools/lsp/server/utils/CoverageEventNode.d.ts'
export class CoverageData extends Object {
    constructor(coverageUri: URI, frame: MaterializedFrame, coverageEventNode: CoverageEventNode)
    readonly coverageEventNode: CoverageEventNode;
    readonly coverageUri: URI;
    readonly frame: MaterializedFrame;
    getCoverageEventNode(): CoverageEventNode;
    getCoverageUri(): URI;
    getFrame(): MaterializedFrame;
}