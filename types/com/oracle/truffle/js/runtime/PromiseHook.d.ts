import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PromiseHook extends Object{
    promiseChanged(changeType: number, promise: JSDynamicObject, parentPromise: JSDynamicObject): void;
}