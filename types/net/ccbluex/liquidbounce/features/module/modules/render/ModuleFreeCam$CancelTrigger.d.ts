import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class ModuleFreeCam$CancelTrigger<E extends Event> extends Object {
    constructor(eventType: Class<E>, predicate: (param0: E) => kotlin.Boolean)
    readonly eventType: Class<E>;
    readonly predicate: (param0: E) => kotlin.Boolean;
}