import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DebugTextWidget$Content } from '../../../../../net/irisshaders/iris/gui/debug/DebugTextWidget$Content.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GridLayout } from '../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { GridLayout$RowHelper } from '../../../../../net/minecraft/client/gui/layouts/GridLayout$RowHelper.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class DebugTextWidget$ContentBuilder extends Object {
    constructor(arg0: number)
    // private alignHeader: LayoutSettings;
    // private grid: GridLayout;
    // private helper: GridLayout$RowHelper;
    // private narration: MutableComponent;
    // private width: number;
    addHeader(arg0: Font, arg1: Component): void;
    addLine(arg0: Font, arg1: Component): void;
    addLine(arg0: Font, arg1: Component, arg2: number): void;
    addSpacer(arg0: number): void;
    build(): DebugTextWidget$Content;
}