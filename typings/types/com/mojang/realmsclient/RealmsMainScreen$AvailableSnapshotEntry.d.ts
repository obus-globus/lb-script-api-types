import type { RealmsMainScreen } from '../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { RealmsMainScreen$Entry } from '../../../com/mojang/realmsclient/RealmsMainScreen$Entry.d.ts'
import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { WidgetTooltipHolder } from '../../../net/minecraft/client/gui/components/WidgetTooltipHolder.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsMainScreen$AvailableSnapshotEntry extends RealmsMainScreen$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsMainScreen, parent: RealmsServer)
    // private parent: RealmsServer;
    // private tooltip: WidgetTooltipHolder;
    // private addSnapshotRealm(): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}