import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Particle$ParticleData<T extends unknown> extends Object implements Copyable {
    constructor(arg0: Type<T>, arg1: T)
    readonly type: Type<T>;
    readonly value: T;
    copy(): Particle$ParticleData<T>;
    getType(): Type<T>;
    getValue(): T;
    setValue(arg0: T): void;
    toString(): string;
    write(arg0: PacketWrapper): void;
    write(arg0: ByteBuf): void;
}