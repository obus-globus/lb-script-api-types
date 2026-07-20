import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleRotations$BodyPart } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations$BodyPart.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Rotations module
 *
 * Allows you to see server-sided rotations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations.kt:46}
 */
export class ModuleRotations extends ClientModule {
    static INSTANCE: ModuleRotations;
    // private bodyPart: ModuleRotations$BodyPart[];
    // private /*not mapped: */ getBodyPart(): ModuleRotations$BodyPart[];
    /**
     * The current model rotation, we could be using
     * {@link RotationManager.currentRotation} and {@link RotationManager.previousRotation}
     * directly but this is required for {@link smooth} to work.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations.kt:76}
     */
    modelRotation: Rotation | null;
    // private modelUpdater: EventHook<GameTickEvent>;
    prevModelRotation: Rotation | null;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private smooth: number;
    // private /*not mapped: */ getSmooth(): number;
    // private vectorDot: Color4b;
    // private /*not mapped: */ getVectorDot(): Color4b;
    // private vectorLine: Color4b;
    // private /*not mapped: */ getVectorLine(): Color4b;
    isPartAllowed(part: ModuleRotations$BodyPart): boolean;
    onDisabled(): void;
}