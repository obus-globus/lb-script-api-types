import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
export class EntityDataAccessor<T extends unknown> extends Record {
    // private id: number;
    // private serializer: EntityDataSerializer<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    serializer(): EntityDataSerializer<T>;
    toString(): string;
}