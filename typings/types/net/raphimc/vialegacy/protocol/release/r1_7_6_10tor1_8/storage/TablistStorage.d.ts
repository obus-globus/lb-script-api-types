import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { TabListEntry } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/model/TabListEntry.d.ts'
export class TablistStorage extends StoredObject {
    constructor(arg0: UserConnection)
    readonly tablist: JavaMap<string, TabListEntry>;
    getTablist(): JavaMap<string, TabListEntry>;
    sendAddEntry(arg0: TabListEntry): void;
    sendRemoveEntry(arg0: TabListEntry): void;
    sendTempEntry(arg0: TabListEntry): void;
}