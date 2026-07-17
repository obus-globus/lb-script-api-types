import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { IncludeGraph } from '../../../../../net/irisshaders/iris/shaderpack/include/IncludeGraph.d.ts'
export class IncludeProcessor extends Object {
    constructor(arg0: IncludeGraph)
    // private cache: JavaMap<AbsolutePackPath, string[]>;
    // private graph: IncludeGraph;
    getIncludedFile(arg0: AbsolutePackPath): string[];
    // private process(arg0: AbsolutePackPath): string[];
}