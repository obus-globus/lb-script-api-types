import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExp$LazyRegexResultIndexProxyProperty extends PropertyProxy {
    constructor()
    get(object: JSDynamicObject): Object;
    set(object: JSDynamicObject, value: Object): boolean;
}