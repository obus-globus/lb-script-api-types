import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { GpuWarnlistManager$Preparations } from '../../../../net/minecraft/client/renderer/GpuWarnlistManager$Preparations.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class GpuWarnlistManager extends SimplePreparableReloadListener<GpuWarnlistManager$Preparations> implements FabricResourceReloader {
    constructor()
    // private fabric$id: Identifier;
    // private showWarning: boolean;
    // private warningDismissed: boolean;
    // private warnings: { [key: string]: string };
    apply(preparations: GpuWarnlistManager$Preparations, manager: ResourceManager, profiler: ProfilerFiller): void;
    dismissWarning(): void;
    fabric$getId(): Identifier;
    getAllWarnings(): string;
    getName(): string;
    getRendererWarnings(): string;
    getVendorWarnings(): string;
    getVersionWarnings(): string;
    hasWarnings(): boolean;
    isShowingWarning(): boolean;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): GpuWarnlistManager$Preparations;
    resetWarnings(): void;
    showWarning(): void;
    willShowWarning(): boolean;
}