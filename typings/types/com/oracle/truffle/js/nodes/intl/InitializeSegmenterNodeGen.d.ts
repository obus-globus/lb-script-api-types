import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeSegmenterNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeSegmenterNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSSegmenterObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenterObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeSegmenterNodeGen extends InitializeSegmenterNode {
    static create(paramcontext: JSContext): InitializeSegmenterNode;
    static createInitalizeSegmenterNode(paramcontext: JSContext): InitializeSegmenterNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSSegmenterObject, arg1Value: Object, arg2Value: Object): JSSegmenterObject;
}