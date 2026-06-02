import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { SSLSessionBindingEvent } from '../../../javax/net/ssl/SSLSessionBindingEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SSLSessionBindingListener extends EventListener, Object{
    valueBound(arg0: SSLSessionBindingEvent): void;
    valueUnbound(arg0: SSLSessionBindingEvent): void;
}