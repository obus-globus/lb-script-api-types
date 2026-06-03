import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { CreateFlatWorldScreen } from '../../../../../net/minecraft/client/gui/screens/CreateFlatWorldScreen.d.ts'
import type { PresetFlatWorldScreen$PresetsList } from '../../../../../net/minecraft/client/gui/screens/PresetFlatWorldScreen$PresetsList.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { FlatLevelGeneratorSettings } from '../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorSettings.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { StructureSet } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class PresetFlatWorldScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static UNKNOWN_PRESET: Component;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static fromString(paramblocks: HolderGetter<Block>, parambiomes: HolderGetter<Biome>, paramstructureSets: HolderGetter<StructureSet>, paramplacedFeatures: HolderGetter<PlacedFeature>, paramdefinition: string, paramsettings: FlatLevelGeneratorSettings): FlatLevelGeneratorSettings;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(parent: CreateFlatWorldScreen)
    // private export: EditBox;
    // private list: PresetFlatWorldScreen$PresetsList;
    // private listText: Component;
    // private parent: CreateFlatWorldScreen;
    // private selectButton: Button;
    // private settings: FlatLevelGeneratorSettings;
    // private shareText: Component;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    init(width: number, height: number): void;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onClose(): void;
    resize(width: number, height: number): void;
    updateButtonValidity(hasSelected: boolean): void;
}