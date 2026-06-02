import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class RenderStateExtensionsKt extends Object {
    static getEntity(paramarg0: EntityRenderState): Entity;
    static isCustom(paramarg0: EntityRenderState): boolean;
    static scaleLightCoords(paramarg0: EntityRenderState, paramarg1: number): void;
    static setCustom(paramarg0: EntityRenderState, paramarg1: boolean): void;
    static setPosition(paramarg0: EntityRenderState, paramarg1: Position): void;
    static setRotation(paramarg0: LivingEntityRenderState, paramarg1: number, paramarg2: number): void;
    static setRotation(paramarg0: LivingEntityRenderState, paramarg1: Rotation): void;
}