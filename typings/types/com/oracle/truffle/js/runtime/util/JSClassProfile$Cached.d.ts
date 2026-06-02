import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
export class JSClassProfile$Cached extends JSClassProfile {
    static create(): JSClassProfile;
    static getUncached(): JSClassProfile;
    private constructor()
    // private expectedJSClass: JSClass;
    // private polymorphicJSClass: boolean;
    getJSClass(jsobject: JSDynamicObject): JSClass;
    profile(jsobjectClass: JSClass): JSClass;
    toString(): string;
}