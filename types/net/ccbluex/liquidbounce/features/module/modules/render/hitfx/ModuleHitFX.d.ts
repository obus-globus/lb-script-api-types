import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HitFXRegistry } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hitfx/HitFXRegistry.d.ts'
import type { ModuleHitFX$Particle } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hitfx/ModuleHitFX$Particle.d.ts'
import type { SoundEvent } from '../../../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ModuleHitFX extends ClientModule {
    static INSTANCE: ModuleHitFX;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private effectHandler: EventHook<PacketEvent>;
    // private lastTargetId: number | null;
    // private /*not mapped: */ getOtherSound(): SoundEvent | null;
    // private otherSoundSet: HitFXRegistry[];
    // private /*not mapped: */ getOtherSoundSet(): HitFXRegistry[];
    // private particleAmount: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getParticleAmount(): { start: number; endInclusive: number; step: number };
    // private particles: ModuleHitFX$Particle[];
    // private /*not mapped: */ getParticles(): ModuleHitFX$Particle[];
    readonly selfSound: SoundEvent | null;
    // private selfSoundSet: HitFXRegistry[];
    // private /*not mapped: */ getSelfSoundSet(): HitFXRegistry[];
    // private vanillaHitSounds: Object[];
    // private playEffect(target: LivingEntity): void;
}