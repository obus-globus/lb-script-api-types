import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyGetNode$GetPropertyFromJSObjectNode extends JavaScriptBaseNode {
    static create(paramroot: PropertyGetNode): PropertyGetNode$GetPropertyFromJSObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(root: PropertyGetNode)
    // private fallbackBranch: BranchProfile;
    // private isRequired: boolean;
    // private key: Object;
    // private nullOrUndefinedBranch: BranchProfile;
    // private callNoSuchHandler(thisObj: JSDynamicObject, function_: JSFunctionObject, noSuchProperty: boolean): Object;
    doJSObjectCached(object: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode, cachedClass: JSClass): Object;
    doJSObjectDirect(object: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode): Object;
    doRequired(object: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode, hasPropertyNode: JSHasPropertyNode, classProfile: JSClassProfile): Object;
    executeWithJSObject(thisObj: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode): Object;
    getFallback(defaultValue: Object): Object;
    getJSClass(object: JSDynamicObject): JSClass;
    getNoSuchProperty(thisObj: JSDynamicObject, defaultValue: Object, root: PropertyGetNode): Object;
    // private getNoSuchPropertySlow(thisObj: JSDynamicObject, defaultValue: Object, isMethod: boolean): Object;
    // private getPropertyFromJSObjectIntl(jsclass: JSClass, object: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode): Object;
    isGlobal(): boolean;
}