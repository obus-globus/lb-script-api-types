import type { ModListWidget } from '../../../../../../com/terraformersmc/modmenu/gui/widget/ModListWidget.d.ts'
import type { Mod } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModListEntry extends ObjectSelectionList$Entry<ModListEntry> {
    static CONTENT_PADDING: number;
    static UNKNOWN_ICON: Identifier;
    constructor(arg0: Mod, arg1: ModListWidget)
    // private client: Minecraft;
    // private iconLocation: Identifier;
    // private list: ModListWidget;
    readonly mod: Mod;
    // private sinceLastClick: number;
    // private yOffset: number;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getIconTexture(): Identifier;
    getMod(): Mod;
    getNarration(): Component;
    getXOffset(): number;
    getYOffset(): number;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    openConfig(): void;
    setYOffset(arg0: number): void;
    updatePlacement(arg0: number, arg1: number, arg2: number): void;
}