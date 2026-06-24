import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { ReportReasonSelectionScreen } from '../../../../../../net/minecraft/client/gui/screens/reporting/ReportReasonSelectionScreen.d.ts'
import type { ReportReasonSelectionScreen$ReasonSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/reporting/ReportReasonSelectionScreen$ReasonSelectionList$Entry.d.ts'
import type { ReportReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportReason.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ReportReasonSelectionScreen$ReasonSelectionList extends ObjectSelectionList<ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: ReportReasonSelectionScreen, minecraft: Minecraft)
    findEntry(reason: ReportReason): ReportReasonSelectionScreen$ReasonSelectionList$Entry;
    getRowWidth(): number;
    setSelected(selected: ReportReasonSelectionScreen$ReasonSelectionList$Entry): void;
}