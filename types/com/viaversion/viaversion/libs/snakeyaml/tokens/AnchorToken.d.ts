import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
export class AnchorToken extends Token {
    constructor(arg0: string, arg1: Mark, arg2: Mark)
    readonly value: string;
    getTokenId(): Token$ID;
    getValue(): string;
}