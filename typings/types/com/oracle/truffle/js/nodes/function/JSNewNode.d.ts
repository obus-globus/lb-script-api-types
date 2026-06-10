import type { TruffleLanguage$Env } from '../../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSNewNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, paramfunction: JavaScriptNode, paramarguments: AbstractFunctionArgumentsNode): JSNewNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, targetNode: JavaScriptNode, arguments: AbstractFunctionArgumentsNode)
    // private arguments: AbstractFunctionArgumentsNode;
    // private context: JSContext;
    // private targetNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createClassNotFoundError(frame: VirtualFrame, target: JSDynamicObject): Object;
    createFunctionTypeError(frame: VirtualFrame, target: Object): Object;
    doJSAdapter(frame: VirtualFrame, target: JSDynamicObject): Object;
    doNewForeignObject(frame: VirtualFrame, target: Object, node: Node, interop: InteropLibrary, convert: ExportValueNode, toJSType: ImportValueNode, isHostClassProf: InlinedConditionProfile, isAbstractProf: InlinedConditionProfile): Object;
    doNewJSProxy(frame: VirtualFrame, proxy: JSDynamicObject, callNew: JSFunctionCallNode): Object;
    doNewReturnThis(frame: VirtualFrame, target: JSDynamicObject, callNew: JSFunctionCallNode): Object;
    // private extend(type: Class<Object>, env: TruffleLanguage$Env): Object;
    // private getAbstractFunctionArguments(frame: VirtualFrame): Object[];
    getNodeObject(): Object;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    // private materializationNeeded(materializedTags: Class<Tag>[]): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    // private throwFunctionTypeError(target: Object): Object;
}