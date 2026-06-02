import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SlowPathException } from '../../../../../com/oracle/truffle/api/nodes/SlowPathException.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSNodeUtil extends Object {
    static formatSourceSection(paramnode: Node): string;
    static getWrappedNode(paramnode: JavaScriptNode): JavaScriptNode;
    static hasExactlyOneRootBodyTag(parambody: JavaScriptNode): boolean;
    static hasImportantTag(paramnode: JavaScriptNode): boolean;
    static isInputGeneratingNode(paramnode: Node): boolean;
    static isTaggedNode(paramnode: Node): boolean;
    static isWrapperNode(paramnode: JavaScriptNode): boolean;
    static resolveName(paramroot: RootNode): string;
    static slowPathException(): SlowPathException;
    private constructor()
}