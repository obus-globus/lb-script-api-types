import type { TurtleModel } from '../../../../../net/minecraft/client/model/animal/turtle/TurtleModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { TurtleRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/TurtleRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Turtle } from '../../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
export class TurtleRenderer extends AgeableMobRenderer<Turtle, TurtleRenderState, TurtleModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): TurtleRenderState;
    createRenderState(entity: Turtle, partialTicks: number): TurtleRenderState;
    extractRenderState(entity: Turtle, state: TurtleRenderState, partialTicks: number): void;
    getShadowRadius(state: TurtleRenderState): number;
    getTextureLocation(state: TurtleRenderState): Identifier;
}