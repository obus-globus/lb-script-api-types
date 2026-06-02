import type { CommentType } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentType.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
export class CommentEvent extends Event {
    constructor(arg0: CommentType, arg1: string, arg2: Mark, arg3: Mark)
    // private type: CommentType;
    readonly value: string;
    getArguments(): string;
    getCommentType(): CommentType;
    getEventId(): Event$ID;
    getValue(): string;
}