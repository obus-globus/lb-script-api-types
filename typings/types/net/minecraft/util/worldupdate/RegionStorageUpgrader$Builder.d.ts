import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { RegionStorageUpgrader } from '../../../../net/minecraft/util/worldupdate/RegionStorageUpgrader.d.ts'
import type { RegionStorageUpgrader$TagModifier } from '../../../../net/minecraft/util/worldupdate/RegionStorageUpgrader$TagModifier.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class RegionStorageUpgrader$Builder extends Object {
    constructor(dataFixer: DataFixer)
    // private dataFixContextTag: CompoundTag;
    // private dataFixType: DataFixTypes;
    // private dataFixer: DataFixer;
    // private defaultVersion: number;
    // private folderName: string;
    // private recreateRegionFiles: boolean;
    // private tagModifiers: Int2ObjectAVLTreeMap<(param0: ChunkPos, param1: CompoundTag) => boolean>;
    // private type: string;
    // private upgradeProgress: UpgradeProgress;
    addTagModifier(version: number, tagModifier: (param0: ChunkPos, param1: CompoundTag) => boolean): RegionStorageUpgrader$Builder;
    build(previousCopiesFileAmounts: number): RegionStorageUpgrader;
    copy(): RegionStorageUpgrader$Builder;
    setDataFixContextTag(dataFixContextTag: CompoundTag): RegionStorageUpgrader$Builder;
    setDataFixType(dataFixType: DataFixTypes): RegionStorageUpgrader$Builder;
    setDefaultVersion(defaultVersion: number): RegionStorageUpgrader$Builder;
    setFolderName(folderName: string): RegionStorageUpgrader$Builder;
    setRecreateRegionFiles(recreateRegionFiles: boolean): RegionStorageUpgrader$Builder;
    // private setTagModifiers(tagModifiers: Int2ObjectAVLTreeMap<(param0: ChunkPos, param1: CompoundTag) => boolean>): RegionStorageUpgrader$Builder;
    setType(type: string): RegionStorageUpgrader$Builder;
    setTypeAndFolderName(name: string): RegionStorageUpgrader$Builder;
    trackProgress(upgradeProgress: UpgradeProgress): RegionStorageUpgrader$Builder;
}