import type { DumperOptions$ScalarStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
export class ScalarToken extends Token {
    constructor(arg0: string, arg1: Mark, arg2: Mark, arg3: boolean)
    constructor(arg0: string, arg1: boolean, arg2: Mark, arg3: Mark, arg4: DumperOptions$ScalarStyle)
    readonly plain: boolean;
    readonly style: DumperOptions$ScalarStyle;
    readonly value: string;
    getPlain(): boolean;
    getStyle(): DumperOptions$ScalarStyle;
    getTokenId(): Token$ID;
    getValue(): string;
}