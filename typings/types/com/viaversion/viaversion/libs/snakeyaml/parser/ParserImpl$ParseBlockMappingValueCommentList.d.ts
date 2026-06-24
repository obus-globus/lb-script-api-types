import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { ParserImpl } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/ParserImpl.d.ts'
import type { Production } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/Production.d.ts'
import type { CommentToken } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/CommentToken.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParserImpl$ParseBlockMappingValueCommentList extends Object implements Production {
    constructor(null_: ParserImpl, arg1: CommentToken[])
    // private tokens: CommentToken[];
    produce(): Event;
}