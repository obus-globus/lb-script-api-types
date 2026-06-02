import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ComponentRenderUtils extends Object {
    static clipText(paramtext: Component, paramfont: Font, paramwidth: number): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    static wrapComponents(parammessage: FormattedText, parammaxWidth: number, paramfont: Font): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    constructor()
}