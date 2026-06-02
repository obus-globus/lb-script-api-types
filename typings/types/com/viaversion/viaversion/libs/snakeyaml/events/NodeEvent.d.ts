import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
export abstract class NodeEvent extends Event {
    constructor(arg0: string, arg1: Mark, arg2: Mark)
    readonly anchor: string;
    getAnchor(): string;
    getArguments(): string;
}