import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClosedCaptionDirection } from '../../../../../../net/ccbluex/liquidbounce/event/events/ClosedCaptionDirection.d.ts'
import type { ClosedCaptionEntry } from '../../../../../../net/ccbluex/liquidbounce/event/events/ClosedCaptionEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class SubtitleOverlayCapture extends Object {
    static INSTANCE: SubtitleOverlayCapture;
    static begin(): void;
    static captureBackground(color: number): void;
    static captureDirection(text: string): void;
    static captureSubtitle(text: Component, textColor: number): void;
    static end(): void;
    static publish(): void;
    static shouldRenderVanilla(): boolean;
    // private active: boolean;
    // private backgroundColor: number;
    // private direction: ClosedCaptionDirection;
    // private entries: ClosedCaptionEntry[];
    // private hadEntries: boolean;
    // private renderVanilla: boolean;
    begin(): void;
    captureBackground(color: number): void;
    captureDirection(text: string): void;
    captureSubtitle(text: Component, textColor: number): void;
    // private checkActive(): void;
    end(): void;
    publish(): void;
    // private resetEntryState(): void;
    shouldRenderVanilla(): boolean;
}