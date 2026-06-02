import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Token extends Object {
    constructor(arg0: Mark, arg1: Mark)
    readonly endMark: Mark;
    readonly startMark: Mark;
    getEndMark(): Mark;
    getStartMark(): Mark;
    getTokenId(): Token$ID;
}