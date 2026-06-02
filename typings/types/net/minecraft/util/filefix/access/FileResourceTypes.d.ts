import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataFixTypes } from '../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { ChunkNbt } from '../../../../../net/minecraft/util/filefix/access/ChunkNbt.d.ts'
import type { CompressedNbt$MissingSeverity } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt$MissingSeverity.d.ts'
import type { FileResourceType } from '../../../../../net/minecraft/util/filefix/access/FileResourceType.d.ts'
import type { LevelDat } from '../../../../../net/minecraft/util/filefix/access/LevelDat.d.ts'
import type { PlayerData } from '../../../../../net/minecraft/util/filefix/access/PlayerData.d.ts'
import type { SavedDataNbt } from '../../../../../net/minecraft/util/filefix/access/SavedDataNbt.d.ts'
import type { RegionStorageInfo } from '../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
export class FileResourceTypes extends Object {
    static LEVEL_DAT: FileResourceType<LevelDat>;
    static PLAYER_DATA: FileResourceType<PlayerData>;
    static chunk(paramtype: DataFixTypes, paraminfo: RegionStorageInfo): FileResourceType<ChunkNbt>;
    static savedData(paramtype: DSL$TypeReference): FileResourceType<SavedDataNbt>;
    static savedData(paramtype: DSL$TypeReference, parammissingSeverity: CompressedNbt$MissingSeverity): FileResourceType<SavedDataNbt>;
    constructor()
}