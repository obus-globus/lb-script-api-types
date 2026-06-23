import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ValueReader } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueReader.d.ts'
import type { ValueWriter } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueWriter.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeRemapper<T extends unknown> extends Record implements ValueReader<T>, ValueWriter<T> {
    constructor(type: Type<T>)
    // private type: Type<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    read(arg0: PacketWrapper): T;
    toString(): string;
    type(): Type<T>;
    write(arg0: PacketWrapper, arg1: T): void;
}