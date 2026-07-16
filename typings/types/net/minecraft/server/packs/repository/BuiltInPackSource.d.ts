import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { VanillaPackResources } from '../../../../../net/minecraft/server/packs/VanillaPackResources.d.ts'
import type { KnownPack } from '../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { Pack } from '../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { RepositorySource } from '../../../../../net/minecraft/server/packs/repository/RepositorySource.d.ts'
import type { DirectoryValidator } from '../../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export abstract class BuiltInPackSource extends Object implements RepositorySource {
    static CORE_PACK_INFO: KnownPack;
    static TESTS_ID: string;
    static VANILLA_ID: string;
    constructor(packType: PackType, vanillaPack: VanillaPackResources, packDir: Identifier, validator: DirectoryValidator)
    // private packDir: Identifier;
    // private packType: PackType;
    // private validator: DirectoryValidator;
    readonly vanillaPack: VanillaPackResources;
    createBuiltinPack(id: string, resources: Pack$ResourcesSupplier, name: Component): Pack;
    createVanillaPack(resources: PackResources): Pack;
    discoverPacksInPath(targetDir: Path, discoveredPacks: (param0: string, param1: (param0: string) => Pack) => void): void;
    getPackTitle(id: string): Component;
    getVanillaPack(): VanillaPackResources;
    // private listBundledPacks(packConsumer: (param0: Pack) => void): void;
    loadPacks(result: (param0: Pack) => void): void;
    populatePackList(discoveredPacks: (param0: string, param1: (param0: string) => Pack) => void): void;
}