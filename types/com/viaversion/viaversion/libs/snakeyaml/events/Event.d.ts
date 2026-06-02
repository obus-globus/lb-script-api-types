import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Event extends Object {
    constructor(arg0: Mark, arg1: Mark)
    readonly endMark: Mark;
    readonly startMark: Mark;
    equals(arg0: Object | null): boolean;
    getArguments(): string;
    getEndMark(): Mark;
    getEventId(): Event$ID;
    getStartMark(): Mark;
    hashCode(): number;
    is(arg0: Event$ID): boolean;
    toString(): string;
}