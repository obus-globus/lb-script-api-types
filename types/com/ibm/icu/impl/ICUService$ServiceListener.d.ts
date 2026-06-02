import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { EventListener } from '../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ICUService$ServiceListener extends EventListener, Object{
    serviceChanged(arg0: ICUService): void;
}