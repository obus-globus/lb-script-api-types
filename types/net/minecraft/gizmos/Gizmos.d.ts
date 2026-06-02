import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
import type { Gizmo } from '../../../net/minecraft/gizmos/Gizmo.d.ts'
import type { GizmoCollector } from '../../../net/minecraft/gizmos/GizmoCollector.d.ts'
import type { GizmoProperties } from '../../../net/minecraft/gizmos/GizmoProperties.d.ts'
import type { GizmoStyle } from '../../../net/minecraft/gizmos/GizmoStyle.d.ts'
import type { Gizmos$TemporaryCollection } from '../../../net/minecraft/gizmos/Gizmos$TemporaryCollection.d.ts'
import type { TextGizmo$Style } from '../../../net/minecraft/gizmos/TextGizmo$Style.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class Gizmos extends Object {
    static addGizmo(paramgizmo: Gizmo): GizmoProperties;
    static arrow(paramstart: Vec3, paramend: Vec3, paramargb: number): GizmoProperties;
    static arrow(paramstart: Vec3, paramend: Vec3, paramargb: number, paramwidth: number): GizmoProperties;
    static billboardText(paramname: string, parampos: Vec3, paramstyle: TextGizmo$Style): GizmoProperties;
    static billboardTextOverBlock(paramtext: string, parampos: BlockPos, paramrow: number, paramcolor: number, paramscale: number): GizmoProperties;
    static billboardTextOverMob(paramentity: Entity, paramrow: number, paramtext: string, paramcolor: number, paramscale: number): GizmoProperties;
    static circle(parampos: Vec3, paramradius: number, paramstyle: GizmoStyle): GizmoProperties;
    static cuboid(paramblockPos: BlockPos, parampadding: number, paramstyle: GizmoStyle): GizmoProperties;
    static cuboid(paramblockPos: BlockPos, paramstyle: GizmoStyle): GizmoProperties;
    static cuboid(paramaabb: AABB, paramstyle: GizmoStyle): GizmoProperties;
    static cuboid(paramaabb: AABB, paramstyle: GizmoStyle, paramcoloredCorner: boolean): GizmoProperties;
    static line(paramstart: Vec3, paramend: Vec3, paramargb: number): GizmoProperties;
    static line(paramstart: Vec3, paramend: Vec3, paramargb: number, paramwidth: number): GizmoProperties;
    static point(paramposition: Vec3, paramargb: number, paramsize: number): GizmoProperties;
    static rect(paramcuboidCornerA: Vec3, paramcuboidCornerB: Vec3, paramface: Direction, paramstyle: GizmoStyle): GizmoProperties;
    static rect(paramcornerA: Vec3, paramcornerB: Vec3, paramcornerC: Vec3, paramcornerD: Vec3, paramstyle: GizmoStyle): GizmoProperties;
    static withCollector(paramcollector: GizmoCollector): Gizmos$TemporaryCollection;
    private constructor()
}