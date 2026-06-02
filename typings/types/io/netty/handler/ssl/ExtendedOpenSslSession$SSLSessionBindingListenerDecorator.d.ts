import type { SSLSessionBindingEvent } from '../../../../javax/net/ssl/SSLSessionBindingEvent.d.ts'
import type { SSLSessionBindingListener } from '../../../../javax/net/ssl/SSLSessionBindingListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ExtendedOpenSslSession$SSLSessionBindingListenerDecorator extends Object implements SSLSessionBindingListener {
    constructor(null_: ExtendedOpenSslSession$SSLSessionBindingListenerDecorator, arg1: SSLSessionBindingListener)
    // private delegate: SSLSessionBindingListener;
    valueBound(arg0: SSLSessionBindingEvent): void;
    valueUnbound(arg0: SSLSessionBindingEvent): void;
}