import type { CommentType } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentType.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
export class CommentToken extends Token {
    constructor(arg0: CommentType, arg1: string, arg2: Mark, arg3: Mark)
    // private type: CommentType;
    readonly value: string;
    getCommentType(): CommentType;
    getTokenId(): Token$ID;
    getValue(): string;
}