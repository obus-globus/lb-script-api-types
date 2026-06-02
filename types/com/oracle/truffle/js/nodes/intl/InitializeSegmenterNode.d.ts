import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSSegmenterObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenterObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeSegmenterNode extends JavaScriptBaseNode {
    static createInitalizeSegmenterNode(paramcontext: JSContext): InitializeSegmenterNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getGranularityOption: GetStringOptionNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getOptionsObjectNode: GetOptionsObjectNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(segmenterObj: JSSegmenterObject, locales: Object, options: Object): JSSegmenterObject;
    initializeSegmenter(segmenterObj: JSSegmenterObject, localesArg: Object, optionsArg: Object): JSSegmenterObject;
}