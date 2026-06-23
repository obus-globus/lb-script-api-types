import type { DataFixer } from '../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { WorldLoader$PackConfig } from '../../../../../net/minecraft/server/WorldLoader$PackConfig.d.ts'
import type { PackRepository } from '../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { WorldDataConfiguration } from '../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { LevelStem } from '../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { GameRules } from '../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
import type { WorldGenSettings } from '../../../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { LevelDataAndDimensions } from '../../../../../net/minecraft/world/level/storage/LevelDataAndDimensions.d.ts'
import type { LevelStorageSource$LevelDirectory } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelDirectory.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { LevelSummary } from '../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
import type { WorldData } from '../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class LevelStorageSource extends Object {
    static ALLOWED_SYMLINKS_CONFIG_NAME: string;
    static TAG_DATA: string;
    static createDefault(parampath: Path[][]): LevelStorageSource;
    static getLevelDataAndDimensions(paramworldAccess: LevelStorageSource$LevelStorageAccess, paramlevelDataTag: Dynamic<Object>, paramdataConfiguration: WorldDataConfiguration, paramdatapackDimensions: LevelStem[], paramregistryAccess: HolderLookup$Provider): LevelDataAndDimensions;
    static getPackConfig(paramlevelDataTag: Dynamic<Object>, parampackRepository: PackRepository, paramsafeMode: boolean): WorldLoader$PackConfig;
    static parseValidator(paramconfigPath: Path[][]): DirectoryValidator;
    static readDataConfig(paramlevelData: Dynamic<Object>): WorldDataConfiguration;
    static readExistingSavedData(paramaccess: LevelStorageSource$LevelStorageAccess, paramregistryAccess: HolderLookup$Provider, paramsavedDataType: SavedDataType<SavedData>): DataResult<SavedData>;
    static writeGameRules(paramworldData: WorldData, paramworldFolder: Path[][], paramgameRules: GameRules): void;
    static writeWorldGenSettings(paramregistryAccess: RegistryAccess, paramworldFolder: Path[][], paramworldGenSettings: WorldGenSettings): void;
    constructor(baseDir: Path[], backupDir: Path[], worldDirValidator: DirectoryValidator, fixerUpper: DataFixer)
    // private backupDir: Path[];
    readonly baseDir: Path[];
    // private fixerUpper: DataFixer;
    readonly worldDirValidator: DirectoryValidator;
    createAccess(levelId: string): LevelStorageSource$LevelStorageAccess;
    findLevelCandidates(): LevelStorageSource$LevelDirectory[];
    getBackupPath(): Path[];
    getBaseDir(): Path[];
    getLevelPath(levelId: string): Path[];
    getName(): string;
    // private getStorageVersion(): number;
    getWorldDirValidator(): DirectoryValidator;
    isNewLevelIdAcceptable(levelId: string): boolean;
    levelExists(levelId: string): boolean;
    loadLevelSummaries(candidates: LevelStorageSource$LevelDirectory[]): CompletableFuture<LevelSummary[]>;
    // private makeLevelSummary(dataTag: Dynamic<Object>, levelDirectory: LevelStorageSource$LevelDirectory, locked: boolean, dataVersion: number): LevelSummary;
    // private readLevelSummary(level: LevelStorageSource$LevelDirectory, locked: boolean): LevelSummary;
    validateAndCreateAccess(levelId: string): LevelStorageSource$LevelStorageAccess;
}