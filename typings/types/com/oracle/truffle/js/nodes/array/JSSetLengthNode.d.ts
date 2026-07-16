import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSSetLengthNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramstrict: boolean): JSSetLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isStrict: boolean)
    // private context: JSContext;
    // private isStrict: boolean;
    createSetLengthProperty(): PropertySetNode;
    execute(target: Object, value: Object): Object;
}