import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ComponentPath } from '../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractSelectionList } from '../../../../../net/minecraft/client/gui/components/AbstractSelectionList.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class ObjectSelectionList<E extends ObjectSelectionList$Entry<E>> extends AbstractSelectionList<E> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, width: number, height: number, y: number, itemHeight: number)
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    updateWidgetNarration(output: NarrationElementOutput): void;
}