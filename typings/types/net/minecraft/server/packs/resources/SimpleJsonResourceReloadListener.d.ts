import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FileToIdConverter } from '../../../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export abstract class SimpleJsonResourceReloadListener<T extends unknown> extends SimplePreparableReloadListener<JavaMap<Identifier, T>> {
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramlister: FileToIdConverter, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: JavaMap<Identifier, T>): void;
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramregistryKey: ResourceKey<T[]>, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: JavaMap<Identifier, T>): void;
    constructor(codec: Codec<T>, lister: FileToIdConverter)
    constructor(registries: HolderLookup$Provider, codec: Codec<T>, registryKey: ResourceKey<T[]>)
    // private codec: Codec<T>;
    // private lister: FileToIdConverter;
    // private ops: DynamicOps<JsonElement>;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): JavaMap<Identifier, T>;
}