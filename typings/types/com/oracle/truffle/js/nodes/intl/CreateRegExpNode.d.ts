import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InteropReadMemberNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadMemberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CreateRegExpNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): CreateRegExpNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private isNamedCGNull: InteropLibrary;
    // private readNamedCG: TRegexUtil$InteropReadMemberNode;
    // private setLastIndex: PropertySetNode;
    createRegExp(compiledRegex: Object): JSRegExpObject;
    createRegExp(compiledRegex: Object, legacyFeaturesEnabled: boolean, realm: JSRealm, proto: JSDynamicObject): JSRegExpObject;
    createWithNamedCG(compiledRegex: Object, legacyFeaturesEnabled: boolean, realm: JSRealm, proto: JSDynamicObject, namedCaptureGroups: Object, hasNamedCaptureGroups: boolean): JSRegExpObject;
    createWithoutNamedCG(compiledRegex: Object, legacyFeaturesEnabled: boolean, realm: JSRealm, proto: JSDynamicObject, namedCaptureGroups: Object, hasNamedCaptureGroups: boolean): JSRegExpObject;
    execute(compiledRegex: Object, legacyFeaturesEnabled: boolean, realm: JSRealm, proto: JSDynamicObject, namedCaptureGroups: Object, hasNamedCG: boolean): JSRegExpObject;
}