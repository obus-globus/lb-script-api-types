import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { LerpingBossEvent } from '../../../../../net/minecraft/client/gui/components/LerpingBossEvent.d.ts'
import type { ClientboundBossEventPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BossEvent } from '../../../../../net/minecraft/world/BossEvent.d.ts'
export class BossHealthOverlay extends Object {
    constructor(minecraft: Minecraft)
    // private events: JavaMap<UUID, LerpingBossEvent>;
    // private minecraft: Minecraft;
    // private extractBar(graphics: GuiGraphicsExtractor, x: number, y: number, event: BossEvent): void;
    // private extractBar(graphics: GuiGraphicsExtractor, x: number, y: number, event: BossEvent, width: number, sprites: Identifier[], overlaySprites: Identifier[]): void;
    extractRenderState(graphics: GuiGraphicsExtractor): void;
    reset(): void;
    shouldCreateWorldFog(): boolean;
    shouldDarkenScreen(): boolean;
    shouldPlayMusic(): boolean;
    update(packet: ClientboundBossEventPacket): void;
}