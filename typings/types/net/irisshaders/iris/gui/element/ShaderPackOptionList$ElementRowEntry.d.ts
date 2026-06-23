import type { NavigationController } from '../../../../../net/irisshaders/iris/gui/NavigationController.d.ts'
import type { ShaderPackOptionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList$BaseEntry.d.ts'
import type { AbstractElementWidget } from '../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { ShaderPackScreen } from '../../../../../net/irisshaders/iris/gui/screen/ShaderPackScreen.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ShaderPackOptionList$ElementRowEntry extends ShaderPackOptionList$BaseEntry {
    static CONTENT_PADDING: number;
    constructor(arg0: ShaderPackScreen, arg1: NavigationController, arg2: AbstractElementWidget<any>[])
    // private cachedPosX: number;
    // private cachedWidth: number;
    // private screen: ShaderPackScreen;
    // private widgets: AbstractElementWidget<any>[];
    children(): GuiEventListener[];
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getHoveredWidget(arg0: number): number;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    narratables(): NarratableEntry[];
}