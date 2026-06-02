import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ModPackResources } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { ModPackResourcesSorter } from '../../../../../../net/fabricmc/fabric/impl/resource/pack/ModPackResourcesSorter.d.ts'
import type { ModPackResourcesUtil$Order } from '../../../../../../net/fabricmc/fabric/impl/resource/pack/ModPackResourcesUtil$Order.d.ts'
import type { FabricLoader } from '../../../../../../net/fabricmc/loader/api/FabricLoader.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { CustomValue } from '../../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModMetadata } from '../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { PackFormat } from '../../../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { PackMetadataSection } from '../../../../../../net/minecraft/server/packs/metadata/pack/PackMetadataSection.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackRepository } from '../../../../../../net/minecraft/server/packs/repository/PackRepository.d.ts'
import type { DataPackConfig } from '../../../../../../net/minecraft/world/level/DataPackConfig.d.ts'
import type { WorldDataConfiguration } from '../../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
export class ModPackResourcesUtil extends Object {
    static GSON: Gson;
    static addLoadOrdering(paramarg0: Map$Entry<string, CustomValue>[], paramarg1: string[], paramarg2: ModPackResourcesSorter, paramarg3: ModPackResourcesUtil$Order, paramarg4: string): void;
    static containsDefault(paramarg0: string, paramarg1: boolean): boolean;
    static createDefaultDataConfiguration(): WorldDataConfiguration;
    static createModdedRepository(): PackRepository;
    static createTestServerSettings(paramarg0: string[], paramarg1: string[]): DataPackConfig;
    static getDefaultIcon(): InputStream;
    static getMetadataPack(paramarg0: PackFormat, paramarg1: Component): PackMetadataSection;
    static getMetadataPackJson(paramarg0: PackFormat, paramarg1: Component, paramarg2: PackType): JsonObject;
    static getModResourcePacks(paramarg0: FabricLoader, paramarg1: PackType, paramarg2: string): ModPackResources[];
    static getName(paramarg0: ModMetadata): Component;
    static openDefault(paramarg0: ModContainer, paramarg1: PackType, paramarg2: string): InputStream;
    static refreshAutoEnabledPacks(paramarg0: Pack[], paramarg1: { [key: string]: Pack }): void;
    static serializeMetadata(paramarg0: PackFormat, paramarg1: string, paramarg2: PackType): string;
    private constructor()
}