import type { PlayerLastCursorItem } from '../../../../../../com/viaversion/viabackwards/protocol/v1_17to1_16_4/storage/PlayerLastCursorItem.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_17 extends ProtocolStorablesBase {
    constructor()
    // private playerLastCursorItem: PlayerLastCursorItem;
    playerLastCursorItem(): PlayerLastCursorItem;
}