import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { TextureFilteringMethod } from '../../../../../../net/minecraft/client/TextureFilteringMethod.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { OptionsSubScreen } from '../../../../../../net/minecraft/client/gui/screens/options/OptionsSubScreen.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { GpuWarnlistManager } from '../../../../../../net/minecraft/client/renderer/GpuWarnlistManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class VideoSettingsScreen extends OptionsSubScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, minecraft: Minecraft, options: Options)
    // private gpuWarnlistManager: GpuWarnlistManager;
    // private oldAnisotropyBit: number;
    // private oldMipmaps: number;
    // private oldTextureFiltering: TextureFilteringMethod;
    addOptions(): void;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onClose(): void;
    removed(): void;
    tick(): void;
    updateFullscreenButton(fullscreen: boolean): void;
    updateTransparencyButton(): void;
}