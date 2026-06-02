import type { DataFixer } from '../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { PushbackInputStream } from '../../../../../java/io/PushbackInputStream.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps } from '../../../../../net/minecraft/resources/RegistryOps.d.ts'
import type { DataFixTypes } from '../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class SavedDataStorage extends Object implements AutoCloseable {
    constructor(dataFolder: Path[], fixerUpper: DataFixer, registries: HolderLookup$Provider)
    // private cache: Map<SavedDataType<Object>, Optional<SavedData>>;
    // private closed: boolean;
    // private dataFolder: Path[];
    // private fixerUpper: DataFixer;
    // private pendingWriteFuture: CompletableFuture<Object>;
    // private registries: HolderLookup$Provider;
    close(): void;
    // private collectDirtyTagsToSave(): Map<SavedDataType<Object>, CompoundTag>;
    computeIfAbsent<T extends SavedData>(type: SavedDataType<T>): T;
    // private encodeUnchecked(type: SavedDataType<T>, data: SavedData, ops: RegistryOps<Tag>): CompoundTag;
    get<T extends SavedData>(type: SavedDataType<T>): T;
    // private getDataFile(id: Identifier): Path[];
    // private isGzip(inputStream: PushbackInputStream): boolean;
    // private readSavedData<T extends SavedData>(type: SavedDataType<T>): T;
    readTagFromDisk(dataFile: Path[], type: DataFixTypes, newVersion: number): CompoundTag;
    saveAndJoin(): void;
    scheduleSave(): CompletableFuture<Object>;
    set<T extends SavedData>(type: SavedDataType<T>, data: T): void;
    // private tryWrite(type: SavedDataType<Object>, tag: CompoundTag): void;
}