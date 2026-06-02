import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiMessageAddition } from '../../../../../net/ccbluex/liquidbounce/interfaces/GuiMessageAddition.d.ts'
import type { GuiMessageLineAddition } from '../../../../../net/ccbluex/liquidbounce/interfaces/GuiMessageLineAddition.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiMessageSource } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageSource.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class GuiMessage extends Record implements GuiMessageAddition, GuiMessageLineAddition {
    // private addedTime: number;
    // private content: Component;
    // private liquid_bounce$count: number;
    // private liquid_bounce$id: string;
    // private signature: MessageSignature;
    // private source: GuiMessageSource;
    // private tag: GuiMessageTag;
    addedTime(): number;
    content(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    liquid_bounce$getCount(): number;
    liquid_bounce$getId(): string;
    liquid_bounce$setCount(arg0: number): void;
    liquid_bounce$setId(arg0: string): void;
    signature(): MessageSignature;
    source(): GuiMessageSource;
    splitLines(font: Font, maxWidth: number): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    tag(): GuiMessageTag;
    toString(): string;
}