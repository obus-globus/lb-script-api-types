import type { EntityType } from '../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EntityTypeUtil$EntityIdSetter<T extends EntityType> extends Object{
    setId(arg0: T, arg1: number): void;
}