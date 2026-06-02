import type { DescriptionListWidget$DescriptionEntry } from '../../../../../com/terraformersmc/modmenu/gui/widget/DescriptionListWidget$DescriptionEntry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class DescriptionListWidget$MailableContactEntry extends DescriptionListWidget$DescriptionEntry {
    static CONTENT_PADDING: number;
    constructor(null_: DescriptionListWidget$MailableContactEntry, arg1: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, arg2: string)
    constructor(null_: DescriptionListWidget$MailableContactEntry, arg1: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, arg2: string, arg3: number)
    // private email: string;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}