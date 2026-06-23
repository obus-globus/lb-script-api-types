import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
export class TargetSelector$Result<TNode extends unknown> extends Object {
    constructor(arg0: ElementNode<TNode>, arg1: ElementNode<TNode>[])
    candidates: ElementNode<TNode>[];
    exactMatch: ElementNode<TNode>;
    getSingleResult(arg0: boolean): TNode;
}