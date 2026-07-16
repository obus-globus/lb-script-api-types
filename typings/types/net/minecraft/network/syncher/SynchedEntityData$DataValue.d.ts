import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
export class SynchedEntityData$DataValue<T extends unknown> extends Record {
    static create<T extends unknown>(paramaccessor: EntityDataAccessor<T>, paramvalue: T): SynchedEntityData$DataValue<T>;
    static read(paraminput: RegistryFriendlyByteBuf, paramid: number): SynchedEntityData$DataValue<Object>;
    constructor(id: number, serializer: EntityDataSerializer<T>, value: T)
    // private id: number;
    // private serializer: EntityDataSerializer<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    serializer(): EntityDataSerializer<T>;
    toString(): string;
    value(): T;
    write(output: RegistryFriendlyByteBuf): void;
}