import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$Listener } from '../../../../../com/google/common/util/concurrent/Service$Listener.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { ServiceManager$ServiceManagerState } from '../../../../../com/google/common/util/concurrent/ServiceManager$ServiceManagerState.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ServiceManager$ServiceListener extends Service$Listener {
    constructor(service: Service, state: WeakReference<ServiceManager$ServiceManagerState>)
    // private service: Service;
    // private state: WeakReference<ServiceManager$ServiceManagerState>;
    failed(from: Service$State, failure: Throwable): void;
    running(): void;
    starting(): void;
    stopping(from: Service$State): void;
    terminated(from: Service$State): void;
}