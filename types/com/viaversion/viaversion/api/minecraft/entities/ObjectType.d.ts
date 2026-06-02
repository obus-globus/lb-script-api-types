import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectType extends Object{
    getData(): number;
    getId(): number;
    getType(): EntityType;
}