import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DeclareGlobalNode } from '../../../../../../com/oracle/truffle/js/nodes/access/DeclareGlobalNode.d.ts'
import type { IsExtensibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSGlobalObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSGlobalObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DeclareGlobalFunctionNode extends DeclareGlobalNode {
    static create(paramvarName: TruffleString, paramconfigurable: boolean): DeclareGlobalFunctionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(varName: TruffleString, configurable: boolean)
    // private configurable: boolean;
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private isExtensibleNode: IsExtensibleNode;
    copyUninitialized(materializedTags: Class<Tag>[]): DeclareGlobalNode;
    doCached(globalObject: JSGlobalObject, value: Object, desc: PropertyDescriptor, context: JSContext, cache: PropertySetNode): void;
    doGeneric(globalObject: JSDynamicObject, value: Object, desc: PropertyDescriptor, context: JSContext): void;
    doUncached(globalObject: JSGlobalObject, value: Object, desc: PropertyDescriptor, context: JSContext): void;
    executeVoid(context: JSContext, realm: JSRealm): void;
    executeVoid(globalObject: JSDynamicObject, value: Object, desc: PropertyDescriptor, context: JSContext): void;
    // private getAttributeFlags(): number;
    isGlobalFunctionDeclaration(): boolean;
    makeDefineOwnPropertyCache(context: JSContext): PropertySetNode;
    verify(context: JSContext, realm: JSRealm): void;
}