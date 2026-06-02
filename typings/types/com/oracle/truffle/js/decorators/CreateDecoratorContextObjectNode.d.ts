import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { CreateDecoratorContextObjectNode$DecorationState } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode$DecorationState.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { CreateObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ScopeFrameNode } from '../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CreateDecoratorContextObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, parammember: ObjectLiteralNode$ObjectLiteralMemberNode): CreateDecoratorContextObjectNode;
    static createForClass(paramcontext: JSContext): CreateDecoratorContextObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isStatic: boolean, isPrivate: boolean, privateScopeNode: ScopeFrameNode, privateMemberSlotIndex: number, privateBrandSlotIndex: number, classDef: boolean)
    // private context: JSContext;
    // private createObjectNode: CreateObjectNode;
    // private defineAccess: CreateDataPropertyNode;
    // private defineAddInitializer: CreateDataPropertyNode;
    // private defineGet: CreateDataPropertyNode;
    // private defineKind: CreateDataPropertyNode;
    // private defineName: CreateDataPropertyNode;
    // private definePrivate: CreateDataPropertyNode;
    // private defineSet: CreateDataPropertyNode;
    // private defineStatic: CreateDataPropertyNode;
    // private isPrivate: boolean;
    // private isStatic: boolean;
    // private privateBrandSlotIndex: number;
    // private privateMemberSlotIndex: number;
    // private privateScopeNode: ScopeFrameNode;
    // private setDecorationState: PropertySetNode;
    // private setInitializersKey: PropertySetNode;
    // private createAddInitializerFunction(initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState): JSFunctionObject;
    // private createContextObject(realm: JSRealm, kindName: TruffleString, name: Object, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, getter: JSObject, setter: JSObject, isClass: boolean): JSObject;
    createContextObject(realm: JSRealm, name: Object, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, getter: JSObject, setter: JSObject, kindName: TruffleString): JSObject;
    createGetterForPrivateMethodOrAccessor(): JSFunctionData;
    createSetterForPrivateAccessor(): JSFunctionData;
    doPrivateAutoAccessor(frame: VirtualFrame, realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, description: Object, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPrivateField(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, description: Object, setStorageKeyNode: PropertySetNode, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPrivateGetter(frame: VirtualFrame, realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, description: Object, valueGetterFunctionData: JSFunctionData): JSObject;
    doPrivateMethod(frame: VirtualFrame, realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, description: Object, valueGetterFunctionData: JSFunctionData): JSObject;
    doPrivateSetter(frame: VirtualFrame, realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, description: Object, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicAutoAccessor(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, setElementRecord: PropertySetNode, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicAutoAccessorCached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, cachedName: Object, strEq: TruffleString$EqualNode, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicFieldCached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, cachedName: Object, strEq: TruffleString$EqualNode, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicFieldUncached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, setElementRecord: PropertySetNode, valueGetterFunctionData: JSFunctionData, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicGetterCached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, cachedName: Object, strEq: TruffleString$EqualNode, valueGetterFunctionData: JSFunctionData): JSObject;
    doPublicGetterUncached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, setElementRecord: PropertySetNode, valueGetterFunctionData: JSFunctionData): JSObject;
    doPublicMethodCached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, cachedName: Object, strEq: TruffleString$EqualNode, valueGetterFunctionData: JSFunctionData): JSObject;
    doPublicMethodUncached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, setElementRecord: PropertySetNode, valueGetterFunctionData: JSFunctionData): JSObject;
    doPublicSetterCached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, cachedName: Object, strEq: TruffleString$EqualNode, valueSetterFunctionData: JSFunctionData): JSObject;
    doPublicSetterUncached(realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState, setElementRecord: PropertySetNode, valueSetterFunctionData: JSFunctionData): JSObject;
    evaluateClass(realm: JSRealm, className: Object, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState): JSObject;
    executeContext(frame: VirtualFrame, realm: JSRealm, record: ClassElementDefinitionRecord, initializers: Object, state: CreateDecoratorContextObjectNode$DecorationState): JSObject;
    getName(key: Object): Object;
    // private getScopeFrame(frame: VirtualFrame): MaterializedFrame;
}