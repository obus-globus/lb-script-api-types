import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StyleBuilder } from '../../../../../net/ccbluex/liquidbounce/utils/text/StyleBuilder.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class StyleDslKt extends Object {
    static style(block: (param0: StyleBuilder) => void): Style;
    static with(self: Style, block: (param0: StyleBuilder) => void): Style;
}