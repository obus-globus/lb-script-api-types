import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConstDirectiveParser$ConstDirective } from '../../../../../net/irisshaders/iris/shaderpack/parsing/ConstDirectiveParser$ConstDirective.d.ts'
import type { ComputeSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
export class ComputeDirectiveParser extends Object {
    static setComputeWorkGroups(paramarg0: ComputeSource, paramarg1: ConstDirectiveParser$ConstDirective): void;
    static setComputeWorkGroupsRelative(paramarg0: ComputeSource, paramarg1: ConstDirectiveParser$ConstDirective): void;
    constructor()
}