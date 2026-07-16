import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Advancement } from '../../../net/minecraft/advancements/Advancement.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementTree } from '../../../net/minecraft/advancements/AdvancementTree.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FileToIdConverter } from '../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimpleJsonResourceReloadListener } from '../../../net/minecraft/server/packs/resources/SimpleJsonResourceReloadListener.d.ts'
import type { ProfilerFiller } from '../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class ServerAdvancementManager extends SimpleJsonResourceReloadListener<Advancement> implements FabricResourceReloader {
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramlister: FileToIdConverter, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    static scanDirectory<T extends unknown>(parammanager: ResourceManager, paramregistryKey: ResourceKey<T[]>, paramops: DynamicOps<JsonElement>, paramcodec: Codec<T>, paramresult: Map<Identifier, T>): void;
    constructor(registries: HolderLookup$Provider)
    // private advancements: Map<Identifier, AdvancementHolder>;
    // private id: Identifier;
    // private registries: HolderLookup$Provider;
    // private tree: AdvancementTree;
    apply(preparations: Map<Identifier, Advancement>, manager: ResourceManager, profiler: ProfilerFiller): void;
    fabric$getId(): Identifier;
    get(id: Identifier): AdvancementHolder;
    getAllAdvancements(): AdvancementHolder[];
    getName(): string;
    tree(): AdvancementTree;
    // private validate(id: Identifier, advancement: Advancement): void;
}