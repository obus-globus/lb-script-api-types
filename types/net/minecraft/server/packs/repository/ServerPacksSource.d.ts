import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { VanillaPackResources } from '../../../../../net/minecraft/server/packs/VanillaPackResources.d.ts'
import type { BuiltInPackSource } from '../../../../../net/minecraft/server/packs/repository/BuiltInPackSource.d.ts'
import type { KnownPack } from '../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { PackRepository } from '../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class ServerPacksSource extends BuiltInPackSource {
    static CORE_PACK_INFO: KnownPack;
    static TESTS_ID: string;
    static VANILLA_ID: string;
    static createPackRepository(paramdatapackDir: Path[][], paramvalidator: DirectoryValidator): PackRepository;
    static createPackRepository(paramlevelSourceAccess: LevelStorageSource$LevelStorageAccess): PackRepository;
    static createVanillaPackSource(): VanillaPackResources;
    static createVanillaTrustedRepository(): PackRepository;
    constructor(validator: DirectoryValidator)
    createBuiltinPack(id: string, resources: Pack$ResourcesSupplier, name: Component): Pack;
    createVanillaPack(resources: PackResources): Pack;
    getPackTitle(id: string): Component;
}