import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { TagTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/TagTuple.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
export class TagToken extends Token {
    constructor(arg0: TagTuple, arg1: Mark, arg2: Mark)
    readonly value: TagTuple;
    getTokenId(): Token$ID;
    getValue(): TagTuple;
}