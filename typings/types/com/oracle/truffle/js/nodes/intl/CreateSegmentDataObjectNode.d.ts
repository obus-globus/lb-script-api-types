import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSSegmenter$Granularity } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$Granularity.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { BreakIterator } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class CreateSegmentDataObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): CreateSegmentDataObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private createIndexPropertyNode: CreateDataPropertyNode;
    // private createInputPropertyNode: CreateDataPropertyNode;
    // private createIsWordLikePropertyNode: CreateDataPropertyNode;
    // private createSegmentPropertyNode: CreateDataPropertyNode;
    // private createIsWordLikeProperty(target: JSObject, isWordLike: boolean): void;
    execute(icuIterator: BreakIterator, granularity: JSSegmenter$Granularity, string: TruffleString, startIndex: number, endIndex: number): JSObject;
}