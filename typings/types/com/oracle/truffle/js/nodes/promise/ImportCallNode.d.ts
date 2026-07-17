import type { Module$ImportPhase } from '../../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { EnumerableOwnPropertyNamesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ImportCallNode extends JavaScriptNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext): ImportCallNode;
    static create(paramcontext: JSContext, paramphase: Module$ImportPhase, paramspecifierRefNode: JavaScriptNode, paramoptionsRefNode: JavaScriptNode, paramactiveScriptOrModule: ScriptOrModule): ImportCallNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, phase: Module$ImportPhase, argRefNode: JavaScriptNode, optionsRefNode: JavaScriptNode, activeScriptOrModule: ScriptOrModule)
    // private activeScriptOrModule: ScriptOrModule;
    // private argRefNode: JavaScriptNode;
    // private callRejectNode: JSFunctionCallNode;
    // private context: JSContext;
    // private enumerableOwnPropertyNamesNode: EnumerableOwnPropertyNamesNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private getWithNode: PropertyGetNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private optionsRefNode: JavaScriptNode;
    // private phase: Module$ImportPhase;
    // private toStringNode: JSToStringNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    // private createContinueDynamicImportHandler(realm: JSRealm): JSFunctionObject;
    execute(frame: VirtualFrame): Object;
    // private getAttributes(options: JSObject): Map$Entry<TruffleString, TruffleString>[];
    hostImportModuleDynamically(referencingScriptOrModule: ScriptOrModule, moduleRequest: Module$ModuleRequest, promiseCapability: PromiseCapabilityRecord): JSDynamicObject;
    // private hostImportModuleDynamicallyWithSite(referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest, promiseCapability: PromiseCapabilityRecord): JSDynamicObject;
    // private newPromiseCapability(): PromiseCapabilityRecord;
    // private rejectPromise(promiseCapability: PromiseCapabilityRecord, ex: AbstractTruffleException): JSDynamicObject;
}