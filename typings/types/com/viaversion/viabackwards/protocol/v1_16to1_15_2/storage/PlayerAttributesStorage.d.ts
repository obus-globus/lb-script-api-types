import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { PlayerAttributesStorage$Attribute } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/PlayerAttributesStorage$Attribute.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerAttributesStorage extends Object {
    constructor()
    // private attributes: JavaMap<string, PlayerAttributesStorage$Attribute>;
    addAttribute(arg0: string, arg1: PlayerAttributesStorage$Attribute): void;
    clearAttributes(): void;
    sendAttributes(arg0: UserConnection, arg1: number): void;
}