import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ServiceManager$Listener extends Object {
    constructor()
    failure(service: Service): void;
    healthy(): void;
    stopped(): void;
}