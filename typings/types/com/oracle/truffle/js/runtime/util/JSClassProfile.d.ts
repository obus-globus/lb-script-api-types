import type { NodeCloneable } from '../../../../../../com/oracle/truffle/api/nodes/NodeCloneable.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class JSClassProfile extends NodeCloneable {
    static create(): JSClassProfile;
    static getUncached(): JSClassProfile;
    constructor()
    getJSClass(jsobject: JSDynamicObject): JSClass;
    profile(jsobjectClass: JSClass): JSClass;
}