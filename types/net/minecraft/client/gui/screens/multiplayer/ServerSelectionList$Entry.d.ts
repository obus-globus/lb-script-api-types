import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
export abstract class ServerSelectionList$Entry extends ObjectSelectionList$Entry<ServerSelectionList$Entry> implements AutoCloseable {
    static CONTENT_PADDING: number;
    constructor()
    close(): void;
    join(): void;
    matches(other: ServerSelectionList$Entry): boolean;
}