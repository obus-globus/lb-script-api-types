import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { BuiltInPackSource } from '../../../../net/minecraft/server/packs/repository/BuiltInPackSource.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { Pack } from '../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { DirectoryValidator } from '../../../../net/minecraft/world/level/validation/DirectoryValidator.d.ts'
export class ClientPackSource extends BuiltInPackSource {
    static CORE_PACK_INFO: KnownPack;
    static HIGH_CONTRAST_PACK: string;
    static TESTS_ID: string;
    static VANILLA_ID: string;
    constructor(externalAssetSource: Path[], validator: DirectoryValidator)
    // private externalAssetDir: Path[];
    createBuiltinPack(id: string, resources: Pack$ResourcesSupplier, name: Component): Pack;
    createVanillaPack(resources: PackResources): Pack;
    // private findExplodedAssetPacks(externalAssetSource: Path[]): Path[];
    getPackTitle(id: string): Component;
    populatePackList(discoveredPacks: (param0: string, param1: (param0: string) => Pack) => void): void;
}