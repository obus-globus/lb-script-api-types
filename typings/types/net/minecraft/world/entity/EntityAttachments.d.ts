import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityAttachment } from '../../../../net/minecraft/world/entity/EntityAttachment.d.ts'
import type { EntityAttachments$Builder } from '../../../../net/minecraft/world/entity/EntityAttachments$Builder.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityAttachments extends Object {
    static builder(): EntityAttachments$Builder;
    static createDefault(paramwidth: number, paramheight: number): EntityAttachments;
    private constructor(attachments: JavaMap<EntityAttachment, Vec3[]>)
    // private attachments: JavaMap<EntityAttachment, Vec3[]>;
    get(attachment: EntityAttachment, index: number, rotY: number): Vec3;
    getAverage(attachment: EntityAttachment): Vec3;
    getClamped(attachment: EntityAttachment, index: number, rotY: number): Vec3;
    getNullable(attachment: EntityAttachment, index: number, rotY: number): Vec3;
    scale(x: number, y: number, z: number): EntityAttachments;
}