import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AsyncRootNode extends Object{
    getAsyncFunctionPromise(asyncFrame: Frame, generatorObjectOrPromiseCapability: Object): JSDynamicObject;
}