import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { OptionsList$AbstractEntry } from '../../../../../net/minecraft/client/gui/components/OptionsList$AbstractEntry.d.ts'
import type { OptionsList$OptionInstanceWidget } from '../../../../../net/minecraft/client/gui/components/OptionsList$OptionInstanceWidget.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { OptionsSubScreen } from '../../../../../net/minecraft/client/gui/screens/options/OptionsSubScreen.d.ts'
export class OptionsList$Entry extends OptionsList$AbstractEntry {
    static CONTENT_PADDING: number;
    static big(paramoptions: Options, paramoptionInstance: OptionInstance<Object>, paramscreen: Screen): OptionsList$Entry;
    static small(paramoptions: Options, paramoptionA: OptionInstance<Object>, paramoptionB: OptionInstance<Object>, paramscreen: OptionsSubScreen): OptionsList$Entry;
    static small(paramleftWidget: AbstractWidget, paramleftWidgetOptionInstance: OptionInstance<Object>, paramrightWidget: AbstractWidget, paramscreen: Screen): OptionsList$Entry;
    static small(paramleftWidget: AbstractWidget, paramrightWidget: AbstractWidget, paramscreen: Screen): OptionsList$Entry;
    private constructor(widgets: OptionsList$OptionInstanceWidget[], screen: Screen)
    // private children: OptionsList$OptionInstanceWidget[];
    // private screen: Screen;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    findOption(option: OptionInstance<Object>): AbstractWidget;
    narratables(): NarratableEntry[];
}