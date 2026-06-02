import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsServer$Compatibility } from '../../../../com/mojang/realmsclient/dto/RealmsServer$Compatibility.d.ts'
import type { RealmsWorldSlotButton$Action } from '../../../../com/mojang/realmsclient/gui/RealmsWorldSlotButton$Action.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsWorldSlotButton$State extends Object {
    constructor(serverData: RealmsServer, slotIndex: number)
    action: RealmsWorldSlotButton$Action;
    activeSlot: boolean;
    // private compatibility: RealmsServer$Compatibility;
    empty: boolean;
    hardcore: boolean;
    // private image: string;
    // private imageId: number;
    minigame: boolean;
    // private slotName: string;
    // private slotVersion: string;
}