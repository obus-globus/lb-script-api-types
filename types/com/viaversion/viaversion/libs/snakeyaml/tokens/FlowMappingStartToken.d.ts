import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
export class FlowMappingStartToken extends Token {
    constructor(arg0: Mark, arg1: Mark)
    getTokenId(): Token$ID;
}