import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class FoliageColorReloadListener extends SimplePreparableReloadListener<number[]> implements FabricResourceReloader {
    constructor()
    // private fabric$id: Identifier;
    apply(pixels: number[], manager: ResourceManager, profiler: ProfilerFiller): void;
    fabric$getId(): Identifier;
    getName(): string;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): number[];
}