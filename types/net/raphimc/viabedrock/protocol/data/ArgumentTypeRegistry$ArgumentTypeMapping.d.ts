import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArgumentTypeRegistry$ArgumentTypeMapping extends Record {
    // private id: number;
    // private writer: (param0: PacketWrapper, param1: ArgumentType<Object>) => void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    toString(): string;
    writer(): (param0: PacketWrapper, param1: ArgumentType<Object>) => void;
}