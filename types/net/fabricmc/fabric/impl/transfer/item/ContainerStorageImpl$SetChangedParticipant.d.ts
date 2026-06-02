import type { SnapshotParticipant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/base/SnapshotParticipant.d.ts'
export class ContainerStorageImpl$SetChangedParticipant extends SnapshotParticipant<boolean> {
    constructor(null_: ContainerStorageImpl$SetChangedParticipant)
    createSnapshot(): boolean;
    onFinalCommit(): void;
    readSnapshot(arg0: boolean): void;
}