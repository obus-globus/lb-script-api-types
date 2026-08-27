import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EfficiencyAttributeStorage$ActiveEnchants } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/EfficiencyAttributeStorage$ActiveEnchants.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EfficiencyAttributeStorage extends Object {
    constructor()
    // private activeEnchants: EfficiencyAttributeStorage$ActiveEnchants;
    // private attributesSent: boolean;
    // private lock: Object;
    // private loginSent: boolean;
    activeEnchants(): EfficiencyAttributeStorage$ActiveEnchants;
    onLoginSent(arg0: number, arg1: UserConnection): void;
    onRespawn(arg0: UserConnection): void;
    // private sendAttributesPacket(arg0: UserConnection, arg1: boolean): void;
    setEnchants(arg0: number, arg1: UserConnection, arg2: EfficiencyAttributeStorage$ActiveEnchants): void;
}