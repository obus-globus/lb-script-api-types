import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeUtil$NodeCountFilter } from '../../../../../com/oracle/truffle/api/nodes/NodeUtil$NodeCountFilter.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NodeUtil extends Object {
    static assertAdopted(paramnode: Node): boolean;
    static assertRecursion(paramnode: Node, parammaxRecursion: number): boolean;
    static cloneNode(paramorig: Object | null): Object | null;
    static collectFieldNames(paramclazz: Class<Object>): string[];
    static collectNodeChildren(paramnode: Node): { [key: string]: Node };
    static collectNodeProperties(paramnode: Node): { [key: string]: Object };
    static collectNodes(paramparent: Node, paramchild: Node): Node[];
    static concat(paramfirst: Object | null, paramsecond: Object | null): Object | null;
    static countNodes(paramroot: Node): number;
    static countNodes(paramroot: Node, paramfilter: NodeUtil$NodeCountFilter): number;
    static findAllNodeInstances(paramroot: Node, paramclazz: Class<Object>): (Object | null)[];
    static findAllParents(paramstart: Node, paramclazz: Class<Object>): (Object | null)[];
    static findAnnotation(paramclazz: Class<Object>, paramannotationClass: Class<Object>): Object | null;
    static findChildFieldName(paramparent: Node, paramchild: Node): string;
    static findFirstNodeInstance(paramroot: Node, paramclazz: Class<Object>): Object | null;
    static findNodeChildren(paramnode: Node): Node[];
    static findParent(paramstart: Node, paramclazz: Class<Object>): Object | null;
    static forEachChild(paramparent: Node, paramvisitor: NodeVisitor): boolean;
    static getNthParent(paramnode: Node, paramn: number): Node;
    static isReplacementSafe(paramparent: Node, paramoldChild: Node, paramnewChild: Node): boolean;
    static nonAtomicReplace(paramoldNode: Node, paramnewNode: Object | null, paramreason: CharSequence): Object | null;
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