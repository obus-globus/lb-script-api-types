import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { HandshakeCompletedEvent } from '../../../javax/net/ssl/HandshakeCompletedEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HandshakeCompletedListener extends EventListener, Object{
    handshakeCompleted(arg0: HandshakeCompletedEvent): void;
}