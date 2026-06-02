import type { ChestDialogStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/ChestDialogStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StorableObjectTask } from '../../../../../../com/viaversion/viaversion/connection/StorableObjectTask.d.ts'
export class ChestDialogViewTask extends StorableObjectTask<ChestDialogStorage> {
    constructor()
    run(arg0: UserConnection, arg1: ChestDialogStorage): void;
}