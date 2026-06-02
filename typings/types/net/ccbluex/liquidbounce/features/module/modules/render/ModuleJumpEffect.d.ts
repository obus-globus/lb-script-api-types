import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Easing } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleJumpEffect extends ClientModule {
    static INSTANCE: ModuleJumpEffect;
    // private animCurve: Easing;
    // private /*not mapped: */ getAnimCurve(): Easing;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private circles: Vec3[];
    // private endRadius: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getEndRadius(): ClosedFloatingPointRange<number>;
    // private hueOffsetAnim: number;
    // private /*not mapped: */ getHueOffsetAnim(): number;
    // private innerColor: Color4b;
    // private /*not mapped: */ getInnerColor(): Color4b;
    // private lifetime: number;
    // private /*not mapped: */ getLifetime(): number;
    // private outerColor: Color4b;
    // private /*not mapped: */ getOuterColor(): Color4b;
    // private playerJumpHandler: EventHook<PlayerJumpEvent>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private animateColor(baseColor: Color4b, progress: number): Color4b;
    onDisabled(): void;
}