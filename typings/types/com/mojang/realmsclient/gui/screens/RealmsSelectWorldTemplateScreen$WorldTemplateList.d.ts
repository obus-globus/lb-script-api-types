import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { RealmsSelectWorldTemplateScreen$Entry } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsSelectWorldTemplateScreen$Entry.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsSelectWorldTemplateScreen$WorldTemplateList extends ObjectSelectionList<RealmsSelectWorldTemplateScreen$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsSelectWorldTemplateScreen$WorldTemplateList)
    constructor(null_: RealmsSelectWorldTemplateScreen$WorldTemplateList)
    addEntry(template: WorldTemplate): void;
    addEntry(entry: RealmsSelectWorldTemplateScreen$Entry): number;
    addEntry(entry: RealmsSelectWorldTemplateScreen$Entry, height: number): number;
    getRowWidth(): number;
    getTemplates(): WorldTemplate[];
    isEmpty(): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    setSelected(selected: RealmsSelectWorldTemplateScreen$Entry): void;
}