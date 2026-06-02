import type { HashCode } from '../../../../../com/google/common/hash/HashCode.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerPackManager$ActivationStatus } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$ActivationStatus.d.ts'
import type { ServerPackManager$PackDownloadStatus } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$PackDownloadStatus.d.ts'
import type { ServerPackManager$RemovalReason } from '../../../../../net/minecraft/client/resources/server/ServerPackManager$RemovalReason.d.ts'
export class ServerPackManager$ServerPackData extends Object {
    private constructor(id: UUID, url: URL, hash: HashCode)
    // private activationStatus: ServerPackManager$ActivationStatus;
    // private downloadStatus: ServerPackManager$PackDownloadStatus;
    // private hash: HashCode;
    // private id: UUID;
    // private path: Path[];
    // private promptAccepted: boolean;
    // private removalReason: ServerPackManager$RemovalReason;
    // private url: URL;
    isRemoved(): boolean;
    setRemovalReasonIfNotSet(removalReason: ServerPackManager$RemovalReason): void;
}