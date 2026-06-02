import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GraalJSException$JSStackTraceElement } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException$JSStackTraceElement.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSException$FrameVisitorImpl extends Object {
    constructor(originatingNode: Node, stackTraceLimit: number, skipFramesUpTo: JSDynamicObject, nashornMode: boolean)
    // private async: boolean;
    // private first: boolean;
    // private inNashornMode: boolean;
    // private inStrictMode: boolean;
    // private originatingNode: Node;
    // private skipFramesUpTo: JSDynamicObject;
    // private skippingFrames: boolean;
    readonly stackTrace: GraalJSException$JSStackTraceElement[];
    // private stackTraceLimit: number;
    getStackTrace(): GraalJSException$JSStackTraceElement[];
    // private stackFrameType(callNode: Node): number;
    visitFrame(element: TruffleStackTraceElement): boolean;
}