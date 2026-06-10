import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class StyleDslKt extends Object {
    static style(block: (param0: Object) => void): Style;
    static with(style: Style, block: (param0: Object) => void): Style;
}