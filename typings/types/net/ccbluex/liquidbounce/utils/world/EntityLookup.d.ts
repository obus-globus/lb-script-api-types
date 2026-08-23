import type { GpuDevice } from '../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { EntityLookup$Collector } from '../../../../../net/ccbluex/liquidbounce/utils/world/EntityLookup$Collector.d.ts'
import type { EntityLookup$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/world/EntityLookup$Companion.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityLookup<T extends Entity> extends Object implements MinecraftShortcuts {
    static Companion: EntityLookup$Companion;
    static create<T extends Entity>(self: EventListener, collector: EntityLookup$Collector<T>): EntityLookup<T>;
    private constructor(owner: EventListener, updateCycle: number, entities: T[], collector: EntityLookup$Collector<T>)
    // private collector: EntityLookup$Collector<T>;
    // private entities: T[];
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    // private onUpdate: EventHook<GameTickEvent>;
    readonly player: LocalPlayer;
    // private ticks: number;
    // private updateCycle: number;
    readonly world: ClientLevel;
    clear(): void;
    getValue(thisRef: Object | null, property: KProperty<Object>): T[];
}