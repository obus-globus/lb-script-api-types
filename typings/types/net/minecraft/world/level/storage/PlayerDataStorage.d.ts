import type { DataFixer } from '../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class PlayerDataStorage extends Object {
    constructor(levelAccess: LevelStorageSource$LevelStorageAccess, fixerUpper: DataFixer)
    // private fixerUpper: DataFixer;
    // private playerDir: File;
    // private backup(nameAndId: NameAndId, suffix: string): void;
    load(nameAndId: NameAndId): Optional<CompoundTag>;
    // private load(nameAndId: NameAndId, suffix: string): Optional<CompoundTag>;
    save(player: Player): void;
}