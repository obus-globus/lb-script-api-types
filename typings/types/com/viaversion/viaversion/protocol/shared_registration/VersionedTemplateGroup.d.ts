import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { RegistrationContext } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/RegistrationContext.d.ts'
import type { SharedRegistrations$RegistrationAction } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/SharedRegistrations$RegistrationAction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class VersionedTemplateGroup extends Record {
    constructor(action: (param0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>) => void, min: ProtocolVersion, max: ProtocolVersion)
    // private action: (param0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>) => void;
    // private max: ProtocolVersion;
    // private min: ProtocolVersion;
    action(): (param0: RegistrationContext<ClientboundPacketType, ServerboundPacketType>) => void;
    contains(arg0: ProtocolVersion): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    max(): ProtocolVersion;
    min(): ProtocolVersion;
    toString(): string;
}