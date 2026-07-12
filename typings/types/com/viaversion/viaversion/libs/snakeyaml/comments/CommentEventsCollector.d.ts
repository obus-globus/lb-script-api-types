import type { CommentLine } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentLine.d.ts'
import type { CommentType } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentType.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Parser } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/Parser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommentEventsCollector extends Object {
    constructor(arg0: Parser, ...arg1: CommentType[])
    constructor(arg0: Event[], ...arg1: CommentType[])
    // private commentLineList: CommentLine[];
    // private eventSource: Event[];
    // private expectedCommentTypes: CommentType[];
    collectEvents(): CommentEventsCollector;
    collectEvents(arg0: Event): Event;
    collectEventsAndPoll(arg0: Event): Event;
    consume(): CommentLine[];
    isEmpty(): boolean;
    // private isEventExpected(arg0: Event): boolean;
}