import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSSegmenterObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenterObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SegmentsPrototypeBuiltins$CreateSegmentIteratorNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): SegmentsPrototypeBuiltins$CreateSegmentIteratorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    execute(segmenter: JSSegmenterObject, value: TruffleString): Object;
}