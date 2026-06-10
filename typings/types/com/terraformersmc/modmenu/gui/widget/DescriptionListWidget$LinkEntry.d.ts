import type { DescriptionListWidget$DescriptionEntry } from '../../../../../com/terraformersmc/modmenu/gui/widget/DescriptionListWidget$DescriptionEntry.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class DescriptionListWidget$LinkEntry extends DescriptionListWidget$DescriptionEntry {
    static CONTENT_PADDING: number;
    constructor(null_: DescriptionListWidget$LinkEntry, arg1: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, arg2: string)
    constructor(null_: DescriptionListWidget$LinkEntry, arg1: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, arg2: string, arg3: number)
    // private link: string;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}