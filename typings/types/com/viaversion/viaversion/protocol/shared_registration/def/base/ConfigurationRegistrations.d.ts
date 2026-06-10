import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { RegistrationContext } from '../../../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConfigurationRegistrations extends Object {
    static registerConfigurationStateSwitching(paramarg0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>): void;
    constructor()
}