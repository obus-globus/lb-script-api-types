import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
import type { ListenerCallQueue$Event } from '../../../../../com/google/common/util/concurrent/ListenerCallQueue$Event.d.ts'
import type { ServiceManager$Listener } from '../../../../../com/google/common/util/concurrent/ServiceManager$Listener.d.ts'
export class ServiceManager$NoOpService extends AbstractService {
    constructor(arg0: ListenerCallQueue$Event<ServiceManager$Listener>)
    doStart(): void;
    doStop(): void;
}