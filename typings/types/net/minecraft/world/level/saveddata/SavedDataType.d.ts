import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DataFixTypes } from '../../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
export class SavedDataType<T extends SavedData> extends Record {
    constructor(id: Identifier, constructor: () => T, codec: Codec<T>, dataFixType: DataFixTypes)
    // private codec: Codec<T>;
    // private constructor: () => T;
    // private dataFixType: DataFixTypes;
    // private id: Identifier;
    codec(): Codec<T>;
    constructor(): () => T;
    dataFixType(): DataFixTypes;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}