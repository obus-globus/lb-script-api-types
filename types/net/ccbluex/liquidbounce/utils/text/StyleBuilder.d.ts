import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClickEvent } from '../../../../../net/minecraft/network/chat/ClickEvent.d.ts'
import type { FontDescription } from '../../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { HoverEvent } from '../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class StyleBuilder extends Object {
    constructor()
    constructor(arg0: Style)
    // private base: Style;
    bold: boolean;
    clickEvent: ClickEvent;
    color: TextColor;
    font: FontDescription;
    hoverEvent: HoverEvent;
    insertion: string;
    italic: boolean;
    obfuscated: boolean;
    shadowColor: number;
    strikethrough: boolean;
    underlined: boolean;
    build(): Style;
}