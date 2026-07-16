import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export abstract class DeclareGlobalNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(varName: TruffleString)
    // private errorProfile: BranchProfile;
    // private hasLexicalBindingNode: HasPropertyCacheNode;
    // private varName: TruffleString;
    copyUninitialized(materializedTags: Class<Tag>[]): DeclareGlobalNode;
    executeVoid(context: JSContext, realm: JSRealm): void;
    isGlobalFunctionDeclaration(): boolean;
    isLexicallyDeclared(): boolean;
    verify(context: JSContext, realm: JSRealm): void;
}