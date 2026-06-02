import type { ObjectFloatPair } from '../../../../../../../it/unimi/dsi/fastutil/objects/ObjectFloatPair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleBreadcrumbs$RenderData } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs$RenderData.d.ts'
import type { ModuleBreadcrumbs$TrailPart } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBreadcrumbs$TrailPart.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export class ModuleBreadcrumbs$Trail extends Object {
    constructor()
    readonly positions: ModuleBreadcrumbs$TrailPart[];
    // private addVerticesToBuffer(renderData: ModuleBreadcrumbs$RenderData, list: ObjectFloatPair<Vector3f>[]): void;
    // private calculateRelativePos(cameraPos: Vec3, pos: Vec3): Vector3f;
    verifyAndRenderTrail(renderData: ModuleBreadcrumbs$RenderData, cameraPos: Vec3, entity: Entity, time: number): void;
}