import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { EquipmentClientInfo } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo.d.ts'
import type { FileToIdConverter } from '../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimpleJsonResourceReloadListener } from '../../../../../net/minecraft/server/packs/resources/SimpleJsonResourceReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { EquipmentAsset } from '../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
export class EquipmentAssetManager extends SimpleJsonResourceReloadListener<EquipmentClientInfo> implements FabricResourceReloader {
    static MISSING: EquipmentClientInfo;
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramlister: FileToIdConverter, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramregistryKey: ResourceKey<T[]>, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    constructor()
    // private equipmentAssets: Map<ResourceKey<EquipmentAsset>, EquipmentClientInfo>;
    // private fabric$id: Identifier;
    apply(preparations: Map<Identifier, EquipmentClientInfo>, manager: ResourceManager, profiler: ProfilerFiller): void;
    fabric$getId(): Identifier;
    get(id: ResourceKey<EquipmentAsset>): EquipmentClientInfo;
    getName(): string;
}