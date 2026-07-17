import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ExecutableNode } from '../../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { NodeClass } from '../../../../../com/oracle/truffle/api/nodes/NodeClass.d.ts'
import type { NodeCost } from '../../../../../com/oracle/truffle/api/nodes/NodeCost.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export abstract class Node extends Object implements NodeInterface, Cloneable {
    constructor()
    readonly parent: Node;
    accept(nodeVisitor: NodeVisitor): void;
    adoptAndCountHelper(newChild: Node): number;
    adoptChildren(): void;
    adoptChildrenAndCount(): number;
    adoptHelper(newChild: Node): void;
    // private adoptHelperInsert(newChild: Node): void;
    // private adoptUnadoptedHelper(newChild: Node): void;
    atomic(closure: () => void): void;
    atomic<T extends unknown>(closure: () => T): T;
    // private checkAdoptable(): void;
    checkSameLanguageOfChildren(): boolean;
    // private checkSameLanguages(newChild: Node): boolean;
    protected clone(): Object;
    copy(): Node;
    deepCopy(): Node;
    getChildren(): Node[];
    getCost(): NodeCost;
    getDebugProperties(): JavaMap<string, Object>;
    getDescription(): string;
    getEncapsulatingSourceSection(): SourceSection;
    // private getExecutableNode(): ExecutableNode;
    getLock(): Lock;
    getNodeClass(): NodeClass;
    getParent(): Node;
    // private getRootBoundary(): RootNode;
    getRootNode(): RootNode;
    // private getRootNodeImpl(): RootNode;
    getSourceSection(): SourceSection;
    // private inAtomicBlock(): boolean;
    insert<T extends Node>(newChild: T): T;
    insert<T extends Node>(newChildren: T[]): T[];
    isAdoptable(): boolean;
    isSafelyReplaceableBy(newNode: Node): boolean;
    notifyInserted(node: Node): void;
    onReplace(newNode: Node, reason: CharSequence): void;
    replace<T extends Node>(newNode: T): T;
    replace<T extends Node>(newNode: T, reason: CharSequence): T;
    replaceHelper(newNode: Node, reason: CharSequence): void;
    reportPolymorphicSpecialize(): void;
    reportReplace(oldNode: Node, newNode: Node, reason: CharSequence): void;
    setParent(parent: Node): void;
    setParentForClone(parent: Node): void;
    toString(): string;
    // private validateNewParent(newParent: Node): boolean;
}