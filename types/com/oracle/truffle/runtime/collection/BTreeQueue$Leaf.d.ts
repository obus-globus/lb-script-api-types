import type { BTreeQueue$Node } from '../../../../../com/oracle/truffle/runtime/collection/BTreeQueue$Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BTreeQueue$Leaf<E extends Object | number | string | boolean> extends BTreeQueue$Node<E> {
    constructor(pivot: Object)
    toString(): string;
}