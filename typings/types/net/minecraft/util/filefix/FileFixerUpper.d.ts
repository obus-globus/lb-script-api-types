import type { DataFixerBuilder$Result } from '../../../../com/mojang/datafixers/DataFixerBuilder$Result.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileFix } from '../../../../net/minecraft/util/filefix/FileFix.d.ts'
import type { FileSystemCapabilities } from '../../../../net/minecraft/util/filefix/FileSystemCapabilities.d.ts'
import type { FileMove } from '../../../../net/minecraft/util/filefix/virtualfilesystem/FileMove.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class FileFixerUpper extends Object {
    static detectFileSystemCapabilities(paramdir: Path): FileSystemCapabilities;
    static worldVersionToFileFixerVersion(paramlevelDataVersion: number): number;
    constructor(dataFixer: DataFixerBuilder$Result, fileFixes: FileFix[], latestFileFixerVersion: number)
    // private dataFixer: DataFixerBuilder$Result;
    // private fileFixes: FileFix[];
    // private latestFileFixerVersion: number;
    applyFileFixers(upgradeProgress: UpgradeProgress, loadedVersion: number, toVersion: number, basePath: Path): void;
    // private applyFileFixersOnCow(upgradeProgress: UpgradeProgress, loadedVersion: number, toVersion: number, worldFolder: Path, fileFixDirectory: Path, tempWorld: Path): FileMove[];
    // private countFiles(applicableFixers: FileFix[], upgradeProgress: UpgradeProgress): void;
    fix(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, upgradeProgress: UpgradeProgress): Dynamic<Object>;
    fix(worldAccess: LevelStorageSource$LevelStorageAccess, levelDataTag: Dynamic<Object>, upgradeProgress: UpgradeProgress, toVersion: number): Dynamic<Object>;
    // private getApplicableFixers(fromVersion: number, toVersion: number): FileFix[];
    requiresFileFixing(levelDataVersion: number): boolean;
    // private startOrContinueFileFixing(upgradeProgress: UpgradeProgress, toVersion: number, worldFolder: Path, tempWorld: Path, fileFixDirectory: Path, loadedVersion: number): FileMove[];
    // private writeUpdatedLevelData(worldFolder: Path, toVersion: number): void;
}