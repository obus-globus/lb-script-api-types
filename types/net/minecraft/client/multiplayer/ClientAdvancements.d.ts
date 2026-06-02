import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientAdvancementsAccessor } from '../../../../net/fabricmc/fabric/mixin/client/rendering/advancement/ClientAdvancementsAccessor.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { AdvancementTree } from '../../../../net/minecraft/advancements/AdvancementTree.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientAdvancements$Listener } from '../../../../net/minecraft/client/multiplayer/ClientAdvancements$Listener.d.ts'
import type { WorldSessionTelemetryManager } from '../../../../net/minecraft/client/telemetry/WorldSessionTelemetryManager.d.ts'
import type { ClientboundUpdateAdvancementsPacket } from '../../../../net/minecraft/network/protocol/game/ClientboundUpdateAdvancementsPacket.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientAdvancements extends Object implements ClientAdvancementsAccessor {
    constructor(minecraft: Minecraft, telemetryManager: WorldSessionTelemetryManager)
    readonly listener: ClientAdvancements$Listener;
    // private minecraft: Minecraft;
    // private progress: Map<AdvancementHolder, AdvancementProgress>;
    // private selectedTab: AdvancementHolder;
    // private telemetryManager: WorldSessionTelemetryManager;
    readonly tree: AdvancementTree;
    get(id: Identifier): AdvancementHolder;
    getTree(): AdvancementTree;
    setListener(listener: ClientAdvancements$Listener): void;
    setSelectedTab(selectedTab: AdvancementHolder, tellServer: boolean): void;
    update(packet: ClientboundUpdateAdvancementsPacket): void;
}