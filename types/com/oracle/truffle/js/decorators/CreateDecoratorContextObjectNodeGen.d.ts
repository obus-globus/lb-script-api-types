import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { CreateDecoratorContextObjectNode } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode.d.ts'
import type { CreateDecoratorContextObjectNode$DecorationState } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode$DecorationState.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PrivateAutoAccessorData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PrivateAutoAccessorData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PrivateFieldData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PrivateFieldData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PrivateGetterData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PrivateGetterData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PrivateMethodData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PrivateMethodData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PrivateSetterData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PrivateSetterData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PublicAutoAccessorCachedData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PublicAutoAccessorCachedData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PublicFieldCachedData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PublicFieldCachedData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PublicGetterCachedData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PublicGetterCachedData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PublicMethodCachedData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PublicMethodCachedData.d.ts'
import type { CreateDecoratorContextObjectNodeGen$PublicSetterCachedData } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNodeGen$PublicSetterCachedData.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ScopeFrameNode } from '../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CreateDecoratorContextObjectNodeGen extends CreateDecoratorContextObjectNode {
    static create(paramcontext: JSContext, parammember: ObjectLiteralNode$ObjectLiteralMemberNode): CreateDecoratorContextObjectNode;
    static create(paramcontext: JSContext, paramisStatic: boolean, paramisPrivate: boolean, paramprivateScopeNode: ScopeFrameNode, paramprivateMemberSlotIndex: number, paramprivateBrandSlotIndex: number, paramclassDef: boolean): CreateDecoratorContextObjectNode;
    static createForClass(paramcontext: JSContext): CreateDecoratorContextObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, isStatic: boolean, isPrivate: boolean, privateScopeNode: ScopeFrameNode, privateMemberSlotIndex: number, privateBrandSlotIndex: number, classDef: boolean)
    // private privateAutoAccessor_cache: CreateDecoratorContextObjectNodeGen$PrivateAutoAccessorData;
    // private privateField_cache: CreateDecoratorContextObjectNodeGen$PrivateFieldData;
    // private privateGetter_cache: CreateDecoratorContextObjectNodeGen$PrivateGetterData;
    // private privateMethod_cache: CreateDecoratorContextObjectNodeGen$PrivateMethodData;
    // private privateSetter_cache: CreateDecoratorContextObjectNodeGen$PrivateSetterData;
    // private publicAutoAccessorCached_cache: CreateDecoratorContextObjectNodeGen$PublicAutoAccessorCachedData;
    // private publicFieldCached_cache: CreateDecoratorContextObjectNodeGen$PublicFieldCachedData;
    // private publicGetterCached_cache: CreateDecoratorContextObjectNodeGen$PublicGetterCachedData;
    // private publicMethodCached_cache: CreateDecoratorContextObjectNodeGen$PublicMethodCachedData;
    // private publicSetterCached_cache: CreateDecoratorContextObjectNodeGen$PublicSetterCachedData;
    // private setElementRecord: PropertySetNode;
    // private state_0_: number;
    // private strEq: TruffleString$EqualNode;
    // private valueGetterFunctionData: JSFunctionData;
    // private valueSetterFunctionData: JSFunctionData;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: JSRealm, arg1Value: ClassElementDefinitionRecord, arg2Value: Object, arg3Value: CreateDecoratorContextObjectNode$DecorationState): JSObject;
    executeContext(frameValue: VirtualFrame, arg0Value: JSRealm, arg1Value: ClassElementDefinitionRecord, arg2Value: Object, arg3Value: CreateDecoratorContextObjectNode$DecorationState): JSObject;
}