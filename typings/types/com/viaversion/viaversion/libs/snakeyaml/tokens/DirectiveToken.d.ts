import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DirectiveToken<T extends unknown> extends Token {
    constructor(arg0: string, arg1: T[], arg2: Mark, arg3: Mark)
    readonly name: string;
    readonly value: T[];
    getName(): string;
    getTokenId(): Token$ID;
    getValue(): T[];
}