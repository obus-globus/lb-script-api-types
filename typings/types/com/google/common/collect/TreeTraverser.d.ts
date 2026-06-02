import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TreeTraverser<T extends Object | number | string | boolean> extends Object {
    static using(paramnodeToChildrenFunction: (param0: Object | null) => Object | null): TreeTraverser<Object>;
    constructor()
    breadthFirstTraversal(root: T): E[];
    children(root: T): T[];
    postOrderIterator(root: T): UnmodifiableIterator<T>;
    postOrderTraversal(root: T): E[];
    preOrderIterator(root: T): UnmodifiableIterator<T>;
    preOrderTraversal(root: T): E[];
}