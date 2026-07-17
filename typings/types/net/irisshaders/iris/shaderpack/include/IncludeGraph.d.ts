import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RusticError } from '../../../../../net/irisshaders/iris/shaderpack/error/RusticError.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { FileNode } from '../../../../../net/irisshaders/iris/shaderpack/include/FileNode.d.ts'
import type { LineTransform } from '../../../../../net/irisshaders/iris/shaderpack/transform/line/LineTransform.d.ts'
export class IncludeGraph extends Object {
    constructor(arg0: Path, arg1: AbsolutePackPath[], arg2: boolean)
    readonly failures: JavaMap<AbsolutePackPath, RusticError>;
    readonly nodes: JavaMap<AbsolutePackPath, FileNode>;
    computeWeaklyConnectedComponents(): IncludeGraph[];
    // private detectCycle(): void;
    // private exploreForCycles(arg0: AbsolutePackPath, arg1: AbsolutePackPath[], arg2: AbsolutePackPath[]): boolean;
    getFailures(): JavaMap<AbsolutePackPath, RusticError>;
    getNodes(): JavaMap<AbsolutePackPath, FileNode>;
    map(arg0: (param0: AbsolutePackPath) => LineTransform): IncludeGraph;
}