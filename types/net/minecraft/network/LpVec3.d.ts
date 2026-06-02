import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class LpVec3 extends Object {
    static ABS_MAX_VALUE: number;
    static ABS_MIN_VALUE: number;
    static hasContinuationBit(paramin: number): boolean;
    static read(paraminput: ByteBuf): Vec3;
    static write(paramoutput: ByteBuf, paramvalue: Vec3): void;
    constructor()
}