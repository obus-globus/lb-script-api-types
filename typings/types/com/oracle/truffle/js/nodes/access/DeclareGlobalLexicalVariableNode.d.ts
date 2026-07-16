import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DeclareGlobalNode } from '../../../../../../com/oracle/truffle/js/nodes/access/DeclareGlobalNode.d.ts'
import type { HasRestrictedGlobalPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasRestrictedGlobalPropertyNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export abstract class DeclareGlobalLexicalVariableNode extends DeclareGlobalNode {
    static create(paramvarName: TruffleString, paramisConst: boolean): DeclareGlobalLexicalVariableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(varName: TruffleString, isConst: boolean)
    // private hasRestrictedGlobalPropertyNode: HasRestrictedGlobalPropertyNode;
    // private isConst: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): DeclareGlobalNode;
    doCached(globalScope: JSDynamicObject, context: JSContext, cache: PropertySetNode): void;
    doUncached(globalScope: JSDynamicObject, context: JSContext): void;
    executeVoid(context: JSContext, realm: JSRealm): void;
    executeVoid(globalScope: JSDynamicObject, context: JSContext): void;
    // private getAttributeFlags(): number;
    isLexicallyDeclared(): boolean;
    makeDefineOwnPropertyCache(context: JSContext): PropertySetNode;
    verify(context: JSContext, realm: JSRealm): void;
}