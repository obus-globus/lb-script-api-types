import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Copyable } from '../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { IdHolder } from '../../../../../../com/viaversion/viaversion/util/IdHolder.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface StructuredData<T extends unknown> extends Copyable, IdHolder, Object{
    copy(): StructuredData<T>;
    id(): number;
    isEmpty(): boolean;
    isPresent(): boolean;
    key(): StructuredDataKey<T>;
    setId(arg0: number): void;
    setValue(arg0: T): void;
    value(): T;
    write(arg0: ByteBuf): void;
}