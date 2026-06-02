import type { DoubleConsumer } from '../../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractTextAreaWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractTextAreaWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { TelemetryEventWidget$Content } from '../../../../../../net/minecraft/client/gui/screens/telemetry/TelemetryEventWidget$Content.d.ts'
import type { TelemetryEventWidget$ContentBuilder } from '../../../../../../net/minecraft/client/gui/screens/telemetry/TelemetryEventWidget$ContentBuilder.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { TelemetryEventType } from '../../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TelemetryEventWidget extends AbstractTextAreaWidget {
    static DEFAULT_TOTAL_PADDING: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, font: Font)
    // private content: TelemetryEventWidget$Content;
    // private font: Font;
    readonly onScrolledListener: (param0: number) => void;
    // private addEventType(builder: TelemetryEventWidget$ContentBuilder, eventType: TelemetryEventType, isDisabled: boolean): void;
    // private addEventTypeProperties(eventType: TelemetryEventType, content: TelemetryEventWidget$ContentBuilder, isDisabled: boolean): void;
    // private buildContent(hasOptedIn: boolean): TelemetryEventWidget$Content;
    // private containerWidth(): number;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getInnerHeight(): number;
    // private grayOutIfDisabled(component: Component, isDisabled: boolean): Component;
    onOptInChanged(optIn: boolean): void;
    setOnScrolledListener(listener: (param0: number) => void): void;
    setScrollAmount(scrollAmount: number): void;
    updateLayout(): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}