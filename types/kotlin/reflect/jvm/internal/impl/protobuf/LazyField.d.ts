import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LazyFieldLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/LazyFieldLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class LazyField extends LazyFieldLite {
    // private defaultInstance: MessageLite;
    equals(arg0: Object | null): boolean;
    getValue(): MessageLite;
    hashCode(): number;
    toString(): string;
}