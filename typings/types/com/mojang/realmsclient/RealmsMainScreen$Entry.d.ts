import type { RealmsMainScreen } from '../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export abstract class RealmsMainScreen$Entry extends ObjectSelectionList$Entry<RealmsMainScreen$Entry> {
    static CONTENT_PADDING: number;
    private constructor(null_: RealmsMainScreen)
    extractClampedString(graphics: GuiGraphicsExtractor, string: string, x: number, y: number, maxX: number, color: number): void;
    extractFirstLine(graphics: GuiGraphicsExtractor, rowTop: number, rowLeft: number, rowWidth: number, serverNameColor: number, serverData: RealmsServer): void;
    extractGameMode(server: RealmsServer, graphics: GuiGraphicsExtractor, rowLeft: number, rowWidth: number, firstLineY: number): number;
    // private extractRealmStatus(graphics: GuiGraphicsExtractor, x: number, y: number, xm: number, ym: number, sprite: Identifier, tooltip: () => Component): void;
    extractSecondLine(graphics: GuiGraphicsExtractor, rowTop: number, rowLeft: number, rowWidth: number, serverData: RealmsServer): void;
    extractStatusLights(serverData: RealmsServer, graphics: GuiGraphicsExtractor, rowRight: number, rowTop: number, mouseX: number, mouseY: number): void;
    extractThirdLine(graphics: GuiGraphicsExtractor, rowTop: number, rowLeft: number, server: RealmsServer): void;
    firstLineY(rowTop: number): number;
    gameModeTextX(rowLeft: number, rowWidth: number, versionComponent: Component): number;
    lineHeight(): number;
    secondLineY(firstLineY: number): number;
    textX(rowLeft: number): number;
    thirdLineY(firstLineY: number): number;
    versionTextX(rowLeft: number, rowWidth: number, versionComponent: Component): number;
}