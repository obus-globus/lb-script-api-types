import type { ListenerCallQueue$Event } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue$Event.d.ts'
import type { ServiceManager$Listener } from '../../../../../com/google/common/util/concurrent/ServiceManager$Listener.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ServiceManager$EmptyServiceManagerWarning extends Throwable {
    constructor(arg0: ListenerCallQueue$Event<ServiceManager$Listener>)
}