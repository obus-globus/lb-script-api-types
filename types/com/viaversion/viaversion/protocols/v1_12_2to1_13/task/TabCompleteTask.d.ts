import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StorableObjectTask } from '../../../../../../com/viaversion/viaversion/connection/StorableObjectTask.d.ts'
import type { TabCompleteTracker } from '../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/TabCompleteTracker.d.ts'
export class TabCompleteTask extends StorableObjectTask<TabCompleteTracker> {
    constructor()
    run(arg0: UserConnection, arg1: TabCompleteTracker): void;
}