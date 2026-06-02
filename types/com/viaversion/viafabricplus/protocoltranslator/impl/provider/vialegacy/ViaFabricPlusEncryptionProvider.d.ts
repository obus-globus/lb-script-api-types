import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EncryptionProvider } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/provider/EncryptionProvider.d.ts'
export class ViaFabricPlusEncryptionProvider extends EncryptionProvider {
    constructor()
    enableDecryption(arg0: UserConnection): void;
}