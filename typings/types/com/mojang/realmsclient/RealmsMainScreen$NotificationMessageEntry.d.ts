import type { RealmsMainScreen } from '../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { RealmsMainScreen$CrossButton } from '../../../com/mojang/realmsclient/RealmsMainScreen$CrossButton.d.ts'
import type { RealmsMainScreen$Entry } from '../../../com/mojang/realmsclient/RealmsMainScreen$Entry.d.ts'
import type { RealmsNotification$VisitUrl } from '../../../com/mojang/realmsclient/dto/RealmsNotification$VisitUrl.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Button } from '../../../net/minecraft/client/gui/components/Button.d.ts'
import type { MultiLineTextWidget } from '../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { FrameLayout } from '../../../net/minecraft/client/gui/layouts/FrameLayout.d.ts'
import type { GridLayout } from '../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsMainScreen$NotificationMessageEntry extends RealmsMainScreen$Entry {
    static CONTENT_PADDING: number;
    static HEIGHT_WITHOUT_TEXT: number;
    static PADDING: number;
    static textWidth(paramrowWidth: number): number;
    constructor(null_: RealmsMainScreen, realmsMainScreen: RealmsMainScreen, messageHeight: number, text: Component, notification: RealmsNotification$VisitUrl)
    // private button: Button;
    // private children: AbstractWidget[];
    // private dismissButton: RealmsMainScreen$CrossButton;
    // private gridLayout: GridLayout;
    // private lastEntryWidth: number;
    readonly text: Component;
    // private textFrame: FrameLayout;
    // private textWidget: MultiLineTextWidget;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    getText(): Component;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private refreshLayout(entryWidth: number): void;
    // private updateEntryWidth(): void;
}