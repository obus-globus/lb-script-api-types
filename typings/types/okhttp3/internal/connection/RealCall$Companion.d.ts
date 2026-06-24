import type { AtomicReferenceFieldUpdater } from '../../../java/util/concurrent/atomic/AtomicReferenceFieldUpdater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../okhttp3/EventListener.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
export class RealCall$Companion extends Object {
    readonly eventListenerUpdater: AtomicReferenceFieldUpdater<RealCall, EventListener>;
}