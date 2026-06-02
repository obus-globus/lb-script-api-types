import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BedrockProtocol } from '../../../../net/raphimc/viabedrock/protocol/BedrockProtocol.d.ts'
export class ExperimentalFeatures extends Object {
    static registerPacketTranslators(paramarg0: BedrockProtocol): void;
    static registerStorages(paramarg0: UserConnection): void;
    static registerTasks(): void;
    constructor()
}