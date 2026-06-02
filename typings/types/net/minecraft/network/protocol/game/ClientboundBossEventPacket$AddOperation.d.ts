import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBossEventPacket$Handler } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Handler.d.ts'
import type { ClientboundBossEventPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Operation.d.ts'
import type { ClientboundBossEventPacket$OperationType } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$OperationType.d.ts'
import type { BossEvent } from '../../../../../net/minecraft/world/BossEvent.d.ts'
import type { BossEvent$BossBarColor } from '../../../../../net/minecraft/world/BossEvent$BossBarColor.d.ts'
import type { BossEvent$BossBarOverlay } from '../../../../../net/minecraft/world/BossEvent$BossBarOverlay.d.ts'
export class ClientboundBossEventPacket$AddOperation extends Object implements ClientboundBossEventPacket$Operation {
    private constructor(input: RegistryFriendlyByteBuf)
    private constructor(event: BossEvent)
    // private color: BossEvent$BossBarColor;
    // private createWorldFog: boolean;
    // private darkenScreen: boolean;
    // private name: Component;
    // private overlay: BossEvent$BossBarOverlay;
    // private playMusic: boolean;
    // private progress: number;
    dispatch(id: UUID, handler: ClientboundBossEventPacket$Handler): void;
    getType(): ClientboundBossEventPacket$OperationType;
    write(output: RegistryFriendlyByteBuf): void;
}