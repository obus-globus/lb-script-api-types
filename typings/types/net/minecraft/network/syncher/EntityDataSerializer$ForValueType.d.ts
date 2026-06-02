import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
export interface EntityDataSerializer$ForValueType<T extends Object | number | string | boolean> extends Object, EntityDataSerializer<T>{
    copy(value: T): T;
    createAccessor(id: number): EntityDataAccessor<T>;
}