import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ITargetSelector } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
export class TargetSelectors$SelectedMethod extends Object {
    constructor(arg0: ITargetSelector, arg1: MethodNode)
    constructor(arg0: TargetSelectors$SelectedMethod, arg1: ITargetSelector, arg2: MethodNode)
    readonly method: MethodNode;
    readonly parent: TargetSelectors$SelectedMethod;
    // private selector: ITargetSelector;
    getMethod(): MethodNode;
    getParent(): TargetSelectors$SelectedMethod;
    next(): ITargetSelector;
    toString(): string;
}