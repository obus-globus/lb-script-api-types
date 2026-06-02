import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { RegistrySyncPayload } from '../../../../../../../net/fabricmc/fabric/impl/registry/sync/packet/RegistrySyncPayload.d.ts'
export class ClientRegistrySyncHandler extends Object {
    static apply(paramarg0: RegistrySyncPayload): void;
    static checkRemoteRemap(paramarg0: RegistrySyncPayload): void;
    static receivePacket(paramarg0: RegistrySyncPayload, paramarg1: ClientConfigurationNetworking$Context): void;
    private constructor()
}