import type { ImmutableList$Builder } from '../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbsolutePackPath } from '../../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
export class ShaderPackSourceNames extends Object {
    static POTENTIAL_STARTS: string[];
    static findPresentSources(paramarg0: ImmutableList$Builder<AbsolutePackPath>, paramarg1: Path[][], paramarg2: AbsolutePackPath, paramarg3: string[]): boolean;
    constructor()
}