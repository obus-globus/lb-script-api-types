import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { DebugOptionsScreen } from '../../../../../../net/minecraft/client/gui/screens/debug/DebugOptionsScreen.d.ts'
import type { DebugOptionsScreen$AbstractOptionEntry } from '../../../../../../net/minecraft/client/gui/screens/debug/DebugOptionsScreen$AbstractOptionEntry.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class DebugOptionsScreen$OptionList extends ContainerObjectSelectionList<DebugOptionsScreen$AbstractOptionEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: DebugOptionsScreen)
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getRowWidth(): number;
    // private notifyListUpdated(): void;
    refreshEntries(): void;
    updateSearch(value: string): void;
}