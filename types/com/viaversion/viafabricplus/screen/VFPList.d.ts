import type { VFPListEntry } from '../../../../com/viaversion/viafabricplus/screen/VFPListEntry.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { SoundManager } from '../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class VFPList extends ObjectSelectionList<VFPListEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    extractSelection(arg0: GuiGraphicsExtractor, arg1: VFPListEntry, arg2: number): void;
    initScrollY(arg0: number): void;
    setScrollAmount(arg0: number): void;
    updateSlotAmount(arg0: number): void;
}