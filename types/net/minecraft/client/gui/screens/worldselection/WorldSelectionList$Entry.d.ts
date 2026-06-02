import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { LevelSummary } from '../../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
export abstract class WorldSelectionList$Entry extends ObjectSelectionList$Entry<WorldSelectionList$Entry> implements AutoCloseable {
    static CONTENT_PADDING: number;
    constructor()
    close(): void;
    getLevelSummary(): LevelSummary;
}