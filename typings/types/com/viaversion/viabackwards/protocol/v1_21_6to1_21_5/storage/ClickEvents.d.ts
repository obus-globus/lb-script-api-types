import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ClickEvents extends Object implements StorableObject {
    static handleClickEvent(paramarg0: UserConnection, paramarg1: Map$Entry<string, Tag>[]): void;
    constructor()
    // private clickEvents: JavaMap<string, Map$Entry<string, Tag>[]>;
    handleChatCommand(arg0: UserConnection, arg1: string): boolean;
    onRemove(): void;
    storeClickEvent(arg0: Map$Entry<string, Tag>[]): string;
}