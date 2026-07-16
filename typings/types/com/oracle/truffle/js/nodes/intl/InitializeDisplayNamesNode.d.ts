import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { GetStringOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetStringOptionNode.d.ts'
import type { JSToCanonicalizedLocaleListNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/JSToCanonicalizedLocaleListNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDisplayNamesObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDisplayNamesObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InitializeDisplayNamesNode extends JavaScriptBaseNode {
    static createInitalizeDisplayNamesNode(paramcontext: JSContext): InitializeDisplayNamesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private errorBranch: BranchProfile;
    // private getFallbackOption: GetStringOptionNode;
    // private getLanguageDisplayOption: GetStringOptionNode;
    // private getLocaleMatcherOption: GetStringOptionNode;
    // private getOptionsObjectNode: GetOptionsObjectNode;
    // private getStyleOption: GetStringOptionNode;
    // private getTypeOption: GetStringOptionNode;
    // private toCanonicalizedLocaleListNode: JSToCanonicalizedLocaleListNode;
    executeInit(displayNames: JSDisplayNamesObject, locales: Object, options: Object): JSDisplayNamesObject;
    initializeDisplayNames(displayNamesObject: JSDisplayNamesObject, localesArg: Object, optionsArg: Object): JSDisplayNamesObject;
}