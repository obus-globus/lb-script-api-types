import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { WaypointStyle } from '../../../../net/minecraft/client/resources/WaypointStyle.d.ts'
import type { FileToIdConverter } from '../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimpleJsonResourceReloadListener } from '../../../../net/minecraft/server/packs/resources/SimpleJsonResourceReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { WaypointStyleAsset } from '../../../../net/minecraft/world/waypoints/WaypointStyleAsset.d.ts'
export class WaypointStyleManager extends SimpleJsonResourceReloadListener<WaypointStyle> implements FabricResourceReloader {
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramlister: FileToIdConverter, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramregistryKey: ResourceKey<T[]>, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    constructor()
    // private fabric$id: Identifier;
    // private waypointStyles: Map<ResourceKey<WaypointStyleAsset>, WaypointStyle>;
    apply(preparations: Map<Identifier, WaypointStyle>, manager: ResourceManager, profiler: ProfilerFiller): void;
    fabric$getId(): Identifier;
    get(id: ResourceKey<WaypointStyleAsset>): WaypointStyle;
    getName(): string;
}