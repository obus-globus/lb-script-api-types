import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EquipmentClientInfo$Dyeable extends Record {
    static CODEC: Codec<EquipmentClientInfo$Dyeable>;
    constructor(colorWhenUndyed: Optional<number>)
    // private colorWhenUndyed: Optional<number>;
    colorWhenUndyed(): Optional<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}