import type { Copyable } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Copyable.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextFormatting } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { ClickEvent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { HoverEvent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { FontDescription } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Style extends Object implements Copyable<Style> {
    constructor()
    constructor(arg0: TextFormatting, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: ClickEvent, arg7: HoverEvent, arg8: string, arg9: Identifier)
    constructor(arg0: TextFormatting, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: ClickEvent, arg7: HoverEvent, arg8: string, arg9: FontDescription)
    constructor(arg0: TextFormatting, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: ClickEvent, arg8: HoverEvent, arg9: string, arg10: Identifier)
    constructor(arg0: TextFormatting, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: ClickEvent, arg8: HoverEvent, arg9: string, arg10: FontDescription)
    readonly bold: boolean;
    readonly clickEvent: ClickEvent;
    readonly color: TextFormatting;
    readonly font: FontDescription;
    readonly hoverEvent: HoverEvent;
    readonly insertion: string;
    readonly italic: boolean;
    readonly obfuscated: boolean;
    readonly parent: Style;
    readonly shadowColor: number;
    readonly strikethrough: boolean;
    readonly underlined: boolean;
    copy(): Style;
    equals(arg0: Object | null): boolean;
    getBold(): boolean;
    getClickEvent(): ClickEvent;
    getColor(): TextFormatting;
    getFont(): FontDescription;
    getFormattings(): TextFormatting[];
    getFormattings(arg0: boolean): TextFormatting[];
    getHoverEvent(): HoverEvent;
    getInsertion(): string;
    getItalic(): boolean;
    getObfuscated(): boolean;
    getParent(): Style;
    getShadowColor(): number;
    getStrikethrough(): boolean;
    getUnderlined(): boolean;
    hashCode(): number;
    isBold(): boolean;
    isEmpty(): boolean;
    isItalic(): boolean;
    isObfuscated(): boolean;
    isStrikethrough(): boolean;
    isUnderlined(): boolean;
    mergeParent(): void;
    setBold(arg0: boolean): Style;
    setClickEvent(arg0: ClickEvent): Style;
    setColor(arg0: number): Style;
    setFont(arg0: Identifier): Style;
    setFont(arg0: FontDescription): Style;
    setFormatting(arg0: TextFormatting): Style;
    setFormatting(arg0: TextFormatting[]): Style;
    setHoverEvent(arg0: HoverEvent): Style;
    setInsertion(arg0: string): Style;
    setItalic(arg0: boolean): Style;
    setObfuscated(arg0: boolean): Style;
    setParent(arg0: Style): Style;
    setShadowColor(arg0: number): Style;
    setStrikethrough(arg0: boolean): Style;
    setUnderlined(arg0: boolean): Style;
    toString(): string;
}