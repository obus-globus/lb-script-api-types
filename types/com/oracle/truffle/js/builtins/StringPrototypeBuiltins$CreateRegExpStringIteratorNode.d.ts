import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltins$CreateRegExpStringIteratorNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private createObjectNode: CreateObjectNode$CreateObjectWithPrototypeNode;
    // private setDoneNode: PropertySetNode;
    // private setGlobalNode: PropertySetNode;
    // private setIteratedStringNode: PropertySetNode;
    // private setIteratingRegExpNode: PropertySetNode;
    // private setUnicodeNode: PropertySetNode;
    createIterator(regex: Object, string: Object, global: boolean, fullUnicode: boolean): JSDynamicObject;
}