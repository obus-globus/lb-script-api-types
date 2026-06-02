import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyProxy extends Object {
    constructor()
    get(store: JSDynamicObject): Object;
    set(store: JSDynamicObject, value: Object): boolean;
}