import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeUtil$NodeCountFilter } from '../../../../../com/oracle/truffle/api/nodes/NodeUtil$NodeCountFilter.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NodeUtil extends Object {
    static assertAdopted(paramnode: Node): boolean;
    static assertRecursion(paramnode: Node, parammaxRecursion: number): boolean;
    static cloneNode<T extends Node>(paramorig: T): T;
    static collectFieldNames(paramclazz: Class<Node>): string[];
    static collectNodeChildren(paramnode: Node): { [key: string]: Node };
    static collectNodeProperties(paramnode: Node): { [key: string]: Object };
    static collectNodes(paramparent: Node, paramchild: Node): Node[];
    static concat<T extends unknown>(paramfirst: T[], paramsecond: T[]): T[];
    static countNodes(paramroot: Node): number;
    static countNodes(paramroot: Node, paramfilter: NodeUtil$NodeCountFilter): number;
    static findAllNodeInstances<T extends unknown>(paramroot: Node, paramclazz: Class<T>): T[];
    static findAllParents<T extends unknown>(paramstart: Node, paramclazz: Class<T>): T[];
    static findAnnotation<T extends Annotation>(paramclazz: Class<Object>, paramannotationClass: Class<T>): T;
    static findChildFieldName(paramparent: Node, paramchild: Node): string;
    static findFirstNodeInstance<T extends unknown>(paramroot: Node, paramclazz: Class<T>): T;
    static findNodeChildren(paramnode: Node): Node[];
    static findParent<T extends unknown>(paramstart: Node, paramclazz: Class<T>): T;
    static forEachChild(paramparent: Node, paramvisitor: NodeVisitor): boolean;
    static getNthParent(paramnode: Node, paramn: number): Node;
    static isReplacementSafe(paramparent: Node, paramoldChild: Node, paramnewChild: Node): boolean;
    static nonAtomicReplace<T extends Node>(paramoldNode: Node, paramnewNode: T, paramreason: CharSequence): T;
    static printCompactTree(paramout: OutputStream, paramnode: Node): void;
    static printCompactTreeToString(paramnode: Node): string;
    static printSourceAttributionTree(paramnode: Node): string;
    static printSourceAttributionTree(paramout: OutputStream, paramnode: Node): void;
    static printSourceAttributionTree(paramout: PrintWriter, paramnode: Node): void;
    static printSyntaxTags(paramnode: Object): string;
    static printTree(paramout: OutputStream, paramnode: Node): void;
    static printTree(paramp: PrintWriter, paramnode: Node): void;
    static printTreeToString(paramnode: Node): string;
    static replaceChild(paramparent: Node, paramoldChild: Node, paramnewChild: Node): boolean;
    static verify(paramroot: Node): boolean;
    private constructor()
}