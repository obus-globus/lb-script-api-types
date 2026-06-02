import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
export class JSCollator$InternalState extends Object {
    constructor()
    readonly boundCompareFunction: JSDynamicObject;
    // private caseFirst: string;
    // private collation: string;
    // private collator: Collator;
    // private ignorePunctuation: boolean;
    readonly initializedCollator: boolean;
    // private locale: string;
    // private numeric: boolean;
    // private sensitivity: string;
    // private usage: string;
    getBoundCompareFunction(): JSDynamicObject;
    isInitializedCollator(): boolean;
    setBoundCompareFunction(boundCompareFunction: JSDynamicObject): void;
    toResolvedOptionsObject(context: JSContext, realm: JSRealm): JSObject;
}