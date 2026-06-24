import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SnapshotParticipant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/base/SnapshotParticipant.d.ts'
export class ContainerStorageImpl$SetChangedParticipant extends SnapshotParticipant<boolean> {
    constructor(null_: (Object | null)[])
    createSnapshot(): boolean;
    onFinalCommit(): void;
    readSnapshot(arg0: boolean): void;
}