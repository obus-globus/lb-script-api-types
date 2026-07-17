import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CommandStorage$Container } from '../../../../../net/minecraft/world/level/storage/CommandStorage$Container.d.ts'
import type { SavedDataStorage } from '../../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
export class CommandStorage extends Object {
    constructor(savedDataStorage: SavedDataStorage)
    // private namespaces: JavaMap<string, CommandStorage$Container>;
    // private savedDataStorage: SavedDataStorage;
    get(id: Identifier): CompoundTag;
    // private getContainer(namespace: string): CommandStorage$Container;
    // private getOrCreateContainer(namespace: string): CommandStorage$Container;
    keys(): Stream<Identifier>;
    set(id: Identifier, contents: CompoundTag): void;
}