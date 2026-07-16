import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TreeTraverser<T extends unknown> extends Object {
    static using(paramnodeToChildrenFunction: (param0: Object | null) => (Object | null)[]): TreeTraverser<Object>;
    constructor()
    breadthFirstTraversal(root: T): T[];
    children(root: T): T[];
    postOrderIterator(root: T): UnmodifiableIterator<T>;
    postOrderTraversal(root: T): T[];
    preOrderIterator(root: T): UnmodifiableIterator<T>;
    preOrderTraversal(root: T): T[];
}