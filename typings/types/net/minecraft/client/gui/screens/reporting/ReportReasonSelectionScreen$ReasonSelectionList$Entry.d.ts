import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { ReportReasonSelectionScreen$ReasonSelectionList } from '../../../../../../net/minecraft/client/gui/screens/reporting/ReportReasonSelectionScreen$ReasonSelectionList.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { ReportReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportReason.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ReportReasonSelectionScreen$ReasonSelectionList$Entry extends ObjectSelectionList$Entry<ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: ReportReasonSelectionScreen$ReasonSelectionList, reason: ReportReason)
    readonly reason: ReportReason;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    getReason(): ReportReason;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}