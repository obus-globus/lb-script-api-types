import type { Yaml$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Emitable } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/Emitable.d.ts'
import type { Event } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Yaml$SilentEmitter extends Object implements Emitable {
    private constructor()
    constructor(arg0: Yaml$1)
    readonly events: Event[];
    emit(arg0: Event): void;
    getEvents(): Event[];
}