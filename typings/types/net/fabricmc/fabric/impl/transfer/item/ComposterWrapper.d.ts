import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { StorageView } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { SnapshotParticipant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/base/SnapshotParticipant.d.ts'
import type { ComposterWrapper$LevelLocation } from '../../../../../../net/fabricmc/fabric/impl/transfer/item/ComposterWrapper$LevelLocation.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class ComposterWrapper extends SnapshotParticipant<number> {
    static get(paramarg0: Level, paramarg1: BlockPos, paramarg2: Direction): StorageView<ItemVariant>[];
    private constructor(arg0: ComposterWrapper$LevelLocation)
    // private downStorage: (Object | null)[];
    // private increaseProbability: number;
    // private location: ComposterWrapper$LevelLocation;
    // private upStorage: (Object | null)[];
    createSnapshot(): number;
    onFinalCommit(): void;
    readSnapshot(arg0: number): void;
}