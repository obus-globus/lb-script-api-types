import type { CommentType } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentType.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CommentEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/CommentEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommentLine extends Object {
    constructor(arg0: Mark, arg1: Mark, arg2: string, arg3: CommentType)
    constructor(arg0: CommentEvent)
    readonly commentType: CommentType;
    readonly endMark: Mark;
    readonly startMark: Mark;
    readonly value: string;
    getCommentType(): CommentType;
    getEndMark(): Mark;
    getStartMark(): Mark;
    getValue(): string;
    toString(): string;
}