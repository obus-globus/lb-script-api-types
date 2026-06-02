import type { EventListener } from '../../../../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
export interface ICUService$ServiceListener extends EventListener, Object{
    serviceChanged(service: ICUService): void;
}