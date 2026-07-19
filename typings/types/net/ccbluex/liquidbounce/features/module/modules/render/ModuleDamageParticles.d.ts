import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { DecimalFormat } from '../../../../../../../java/text/DecimalFormat.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EntityHealthUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/EntityHealthUpdateEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleDamageParticles$Particle } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDamageParticles$Particle.d.ts'
import type { ModuleDamageParticles$TrackMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleDamageParticles$TrackMode.d.ts'
import type { Easing } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * DamageParticles module
 *
 * Show health changes of entities
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleDamageParticles.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleDamageParticles.kt:46}
 */
export class ModuleDamageParticles extends ClientModule {
    static INSTANCE: ModuleDamageParticles;
    // private EPSILON: number;
    // private FORMATTER: DecimalFormat;
    // private displacement: Vec3;
    // private /*not mapped: */ getDisplacement(): Vec3;
    // private displacementTransition: Easing;
    // private /*not mapped: */ getDisplacementTransition(): Easing;
    // private entityHealthMap: JavaMap<any, any>;
    // private entityHealthUpdateHandler: EventHook<EntityHealthUpdateEvent>;
    // private particles: ModuleDamageParticles$Particle[];
    // private renderHandler: EventHook<OverlayRenderEvent>;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private scaleTransition: Easing;
    // private /*not mapped: */ getScaleTransition(): Easing;
    // private tickHandler: EventHook<GameTickEvent>;
    // private trackMode: ModuleDamageParticles$TrackMode;
    // private /*not mapped: */ getTrackMode(): ModuleDamageParticles$TrackMode;
    // private ttl: number;
    // private /*not mapped: */ getTtl(): number;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    onDisabled(): void;
    // private shouldNotTrack(entity: LivingEntity): boolean;
    // private trackEntityHealth(entity: LivingEntity, oldHealth: number, newHealth: number, maxHealth: number): void;
}