import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ElementNode } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
export class ElementNode$ElementNodeIterator extends Object implements Iterator<ElementNode<AbstractInsnNode>> {
    constructor(arg0: Iterator<AbstractInsnNode>, arg1: boolean)
    // private filterDynamic: boolean;
    // private iter: Iterator<AbstractInsnNode>;
    forEachRemaining(arg0: (param0: ElementNode<AbstractInsnNode>) => void): void;
    hasNext(): boolean;
    next(): ElementNode<AbstractInsnNode>;
}