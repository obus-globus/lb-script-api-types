import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlayerActionType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PlayerActionType.d.ts'
export class ClientPlayerEntity$AuthInputBlockAction extends Record {
    // private action: PlayerActionType;
    // private direction: number;
    // private position: BlockPosition;
    action(): PlayerActionType;
    direction(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    position(): BlockPosition;
    toString(): string;
}