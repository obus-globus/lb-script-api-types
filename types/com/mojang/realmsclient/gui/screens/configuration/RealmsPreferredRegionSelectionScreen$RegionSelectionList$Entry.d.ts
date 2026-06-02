import type { RealmsRegion } from '../../../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { RegionSelectionPreference } from '../../../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { RealmsSettingsTab$RegionSelection } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsSettingsTab$RegionSelection.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry extends ObjectSelectionList$Entry<RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry, preference: RegionSelectionPreference, region: RealmsRegion)
    constructor(null_: RealmsPreferredRegionSelectionScreen$RegionSelectionList$Entry, regionSelection: RealmsSettingsTab$RegionSelection)
    // private name: Component;
    // private regionSelection: RealmsSettingsTab$RegionSelection;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}