import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiMessageLineAddition } from '../../../../../net/ccbluex/liquidbounce/interfaces/GuiMessageLineAddition.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiMessage } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class GuiMessage$Line extends Record implements GuiMessageLineAddition {
    // private content: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private endOfEntry: boolean;
    // private liquid_bounce$id: string;
    // private parent: GuiMessage;
    addedTime(): number;
    content(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    endOfEntry(): boolean;
    equals(o: Object | null): boolean;
    getTagIconLeft(font: Font): number;
    hashCode(): number;
    liquid_bounce$getId(): string;
    liquid_bounce$setId(arg0: string): void;
    parent(): GuiMessage;
    tag(): GuiMessageTag;
    toString(): string;
}