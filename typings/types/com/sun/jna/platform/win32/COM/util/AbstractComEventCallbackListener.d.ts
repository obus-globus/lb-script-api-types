import type { IDispatchCallback } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatchCallback.d.ts'
import type { IComEventCallbackListener } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackListener.d.ts'
import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractComEventCallbackListener extends Object implements IComEventCallbackListener {
    constructor()
    // private dispatchCallback: IDispatchCallback;
    errorReceivingCallbackEvent(arg0: string, arg1: Exception): void;
    setDispatchCallbackListener(arg0: IDispatchCallback): void;
}