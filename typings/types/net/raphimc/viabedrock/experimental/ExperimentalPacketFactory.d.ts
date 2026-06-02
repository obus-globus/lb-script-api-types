import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerActionType } from '../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PlayerActionType.d.ts'
export class ExperimentalPacketFactory extends Object {
    static sendBedrockPlayerAction(paramarg0: UserConnection, paramarg1: number, paramarg2: PlayerActionType, paramarg3: BlockPosition, paramarg4: BlockPosition, paramarg5: number): void;
    constructor()
}