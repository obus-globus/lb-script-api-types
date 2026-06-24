import type { ServiceManager$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractService } from '../../../../../com/google/common/util/concurrent/AbstractService.d.ts'
export class ServiceManager$NoOpService extends AbstractService {
    private constructor()
    constructor(arg0: ServiceManager$1)
    doStart(): void;
    doStop(): void;
}