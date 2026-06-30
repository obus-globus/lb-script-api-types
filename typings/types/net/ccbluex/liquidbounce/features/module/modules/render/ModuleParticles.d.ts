import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleParticles$BuiltinParticle } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles$BuiltinParticle.d.ts'
import type { ModuleParticles$Particle } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles$Particle.d.ts'
import type { ModuleParticles$Physical } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleParticles$Physical.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class ModuleParticles extends ClientModule {
    static INSTANCE: ModuleParticles;
    // private attackEvent: EventHook<AttackEntityEvent>;
    // private builtinParticles: ModuleParticles$BuiltinParticle[];
    // private /*not mapped: */ getBuiltinParticles(): ModuleParticles$BuiltinParticle[];
    // private chronometer: Chronometer;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    // private count: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCount(): { start: number; endInclusive: number; step: number };
    // private displayHandler: EventHook<WorldRenderEvent>;
    // private /*not mapped: */ getGravity(): number;
    // private particleSize: number;
    // private /*not mapped: */ getParticleSize(): number;
    // private particles: ModuleParticles$Particle[];
    // private physicalSettings: ModuleParticles$Physical;
    // private rotate: boolean;
    // private /*not mapped: */ getRotate(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldHandler: EventHook<WorldChangeEvent>;
    onDisabled(): void;
}