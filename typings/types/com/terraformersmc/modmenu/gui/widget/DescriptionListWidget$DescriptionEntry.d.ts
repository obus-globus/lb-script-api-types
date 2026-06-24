import type { DescriptionListWidget } from '../../../../../com/terraformersmc/modmenu/gui/widget/DescriptionListWidget.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ContainerObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class DescriptionListWidget$DescriptionEntry extends ContainerObjectSelectionList$Entry<DescriptionListWidget$DescriptionEntry> {
    static CONTENT_PADDING: number;
    constructor(null_: DescriptionListWidget, arg1: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean)
    constructor(null_: DescriptionListWidget, arg1: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, arg2: number)
    // private indent: number;
    // private text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    updateTextEntry: boolean;
    children(): GuiEventListener[];
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    isMouseOver(arg0: number, arg1: number): boolean;
    narratables(): NarratableEntry[];
    setUpdateTextEntry(): DescriptionListWidget$DescriptionEntry;
}