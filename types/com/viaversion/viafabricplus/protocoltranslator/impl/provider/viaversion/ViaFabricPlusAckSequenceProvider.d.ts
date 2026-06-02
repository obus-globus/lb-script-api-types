import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AckSequenceProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/provider/AckSequenceProvider.d.ts'
export class ViaFabricPlusAckSequenceProvider extends AckSequenceProvider {
    constructor()
    handleSequence(arg0: UserConnection, arg1: number): void;
}