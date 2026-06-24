import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NewMinecartBehavior$MinecartStep extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, NewMinecartBehavior$MinecartStep>;
    static ZERO: NewMinecartBehavior$MinecartStep;
    constructor(position: Vec3, movement: Vec3, yRot: number, xRot: number, weight: number)
    // private movement: Vec3;
    // private position: Vec3;
    // private weight: number;
    // private xRot: number;
    // private yRot: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    movement(): Vec3;
    position(): Vec3;
    toString(): string;
    weight(): number;
    xRot(): number;
    yRot(): number;
}