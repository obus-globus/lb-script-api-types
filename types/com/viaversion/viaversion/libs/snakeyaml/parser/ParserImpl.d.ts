import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CommentEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/CommentEvent.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
import type { Parser } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/Parser.d.ts'
import type { Production } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/Production.d.ts'
import type { VersionTagsTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/parser/VersionTagsTuple.d.ts'
import type { StreamReader } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/reader/StreamReader.d.ts'
import type { Scanner } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/scanner/Scanner.d.ts'
import type { CommentToken } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/CommentToken.d.ts'
import type { ArrayStack } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/ArrayStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParserImpl extends Object implements Parser {
    constructor(arg0: StreamReader, arg1: LoaderOptions)
    constructor(arg0: Scanner)
    // private currentEvent: Event;
    // private directives: VersionTagsTuple;
    // private marks: ArrayStack<Mark>;
    // private scanner: Scanner;
    // private state: Production;
    // private states: ArrayStack<Production>;
    checkEvent(arg0: Event$ID): boolean;
    getEvent(): Event;
    // private parseBlockNodeOrIndentlessSequence(): Event;
    // private parseFlowNode(): Event;
    // private parseNode(arg0: boolean, arg1: boolean): Event;
    peekEvent(): Event;
    // private processDirectives(): VersionTagsTuple;
    // private processEmptyScalar(arg0: Mark): Event;
    // private produceCommentEvent(arg0: CommentToken): CommentEvent;
}