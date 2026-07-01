import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityAttachments } from '../../../../net/minecraft/world/entity/EntityAttachments.d.ts'
import type { EntityAttachments$Builder } from '../../../../net/minecraft/world/entity/EntityAttachments$Builder.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityDimensions extends Record {
    static fixed(paramwidth: number, paramheight: number): EntityDimensions;
    static scalable(paramwidth: number, paramheight: number): EntityDimensions;
    constructor(width: number, height: number, eyeHeight: number, attachments: EntityAttachments, fixed: boolean)
    // private attachments: EntityAttachments;
    // private eyeHeight: number;
    // private fixed: boolean;
    // private height: number;
    // private width: number;
    attachments(): EntityAttachments;
    equals(o: Object | null): boolean;
    eyeHeight(): number;
    fixed(): boolean;
    hashCode(): number;
    height(): number;
    makeBoundingBox(x: number, y: number, z: number): AABB;
    makeBoundingBox(pos: Vec3): AABB;
    scale(scaleFactor: number): EntityDimensions;
    scale(widthScaleFactor: number, heightScaleFactor: number): EntityDimensions;
    toString(): string;
    width(): number;
    withAttachments(attachments: EntityAttachments$Builder): EntityDimensions;
    withEyeHeight(eyeHeight: number): EntityDimensions;
}