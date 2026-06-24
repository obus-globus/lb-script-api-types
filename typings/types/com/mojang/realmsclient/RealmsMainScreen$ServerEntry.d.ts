import type { RealmsMainScreen } from '../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { RealmsMainScreen$Entry } from '../../../com/mojang/realmsclient/RealmsMainScreen$Entry.d.ts'
import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { WidgetTooltipHolder } from '../../../net/minecraft/client/gui/components/WidgetTooltipHolder.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsMainScreen$ServerEntry extends RealmsMainScreen$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsMainScreen, serverData: RealmsServer)
    // private serverData: RealmsServer;
    // private tooltip: WidgetTooltipHolder;
    // private createUnitializedRealm(): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    // private extractOnlinePlayers(graphics: GuiGraphicsExtractor, rowTop: number, rowLeft: number, rowWidth: number, rowHeight: number, mouseX: number, mouseY: number, a: number): boolean;
    getNarration(): Component;
    getServer(): RealmsServer;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private playRealm(): void;
}