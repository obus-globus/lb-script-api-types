import type { ModsScreen } from '../../../../../com/terraformersmc/modmenu/gui/ModsScreen.d.ts'
import type { DescriptionListWidget$DescriptionEntry } from '../../../../../com/terraformersmc/modmenu/gui/widget/DescriptionListWidget$DescriptionEntry.d.ts'
import type { Mod } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractSelectionList } from '../../../../../net/minecraft/client/gui/components/AbstractSelectionList.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class DescriptionListWidget extends AbstractSelectionList<DescriptionListWidget$DescriptionEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: DescriptionListWidget, arg6: ModsScreen)
    // private parent: ModsScreen;
    // private selectedMod: Mod;
    // private textRenderer: Font;
    // private creditsRoleText(arg0: string): Component;
    extractListItems(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getRowWidth(): number;
    getSelected(): DescriptionListWidget$DescriptionEntry;
    // private rebuildUI(): void;
    scrollBarX(): number;
    updateSelectedMod(arg0: Mod): void;
    updateWidgetNarration(arg0: NarrationElementOutput): void;
}