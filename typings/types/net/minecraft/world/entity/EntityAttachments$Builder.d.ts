import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityAttachment } from '../../../../net/minecraft/world/entity/EntityAttachment.d.ts'
import type { EntityAttachments } from '../../../../net/minecraft/world/entity/EntityAttachments.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityAttachments$Builder extends Object {
    private constructor()
    // private attachments: JavaMap<EntityAttachment, Vec3[]>;
    attach(attachment: EntityAttachment, x: number, y: number, z: number): EntityAttachments$Builder;
    attach(attachment: EntityAttachment, point: Vec3): EntityAttachments$Builder;
    build(width: number, height: number): EntityAttachments;
}