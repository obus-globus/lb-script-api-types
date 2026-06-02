import type { RealmsMainScreen$Entry } from '../../../com/mojang/realmsclient/RealmsMainScreen$Entry.d.ts'
import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { WidgetTooltipHolder } from '../../../net/minecraft/client/gui/components/WidgetTooltipHolder.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsMainScreen$ParentEntry extends RealmsMainScreen$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsMainScreen$ParentEntry, server: RealmsServer)
    // private server: RealmsServer;
    // private tooltip: WidgetTooltipHolder;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
}