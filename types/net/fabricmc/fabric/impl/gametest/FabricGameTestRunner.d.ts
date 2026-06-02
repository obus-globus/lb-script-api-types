import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileToIdConverter } from '../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { PackRepository } from '../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class FabricGameTestRunner extends Object {
    static ENABLED: boolean;
    static GAMETEST_STRUCTURE_FINDER: FileToIdConverter;
    static runHeadlessServer(paramarg0: LevelStorageSource$LevelStorageAccess, paramarg1: PackRepository): void;
    private constructor()
}