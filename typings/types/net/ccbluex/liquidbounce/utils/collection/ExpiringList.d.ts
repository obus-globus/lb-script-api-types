import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ExpiringList$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/collection/ExpiringList$Companion.d.ts'
export class ExpiringList<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: ExpiringList$Companion;
    static create<E extends unknown>(self: EventListener): E[];
}