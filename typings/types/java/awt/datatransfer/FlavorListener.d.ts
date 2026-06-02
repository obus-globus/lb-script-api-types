import type { FlavorEvent } from '../../../java/awt/datatransfer/FlavorEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FlavorListener extends EventListener, Object{
    flavorsChanged(arg0: FlavorEvent): void;
}