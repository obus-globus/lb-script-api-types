import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { TelemetryEventWidget$Content } from '../../../../../../net/minecraft/client/gui/screens/telemetry/TelemetryEventWidget$Content.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TelemetryEventWidget$ContentBuilder extends Object {
    constructor(width: number)
    // private layout: LinearLayout;
    // private narration: MutableComponent;
    // private width: number;
    addHeader(font: Font, line: Component): void;
    addLine(font: Font, line: Component): void;
    addLine(font: Font, line: Component, paddingBottom: number): void;
    addSpacer(height: number): void;
    build(): TelemetryEventWidget$Content;
}