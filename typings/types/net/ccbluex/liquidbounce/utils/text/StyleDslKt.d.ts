import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class StyleDslKt extends Object {
    static style(block: Function1<Object, void>): Style;
    static with(style: Style, block: Function1<Object, void>): Style;
}