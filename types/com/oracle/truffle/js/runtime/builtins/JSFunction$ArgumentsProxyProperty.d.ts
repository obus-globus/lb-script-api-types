import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunction$ArgumentsProxyProperty extends PropertyProxy {
    private constructor()
    get(thiz: JSDynamicObject): Object;
}