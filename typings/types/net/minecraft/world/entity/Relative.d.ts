import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Relative extends Enum<Relative> {
    static ALL: Relative[];
    static DELTA: Relative[];
    static DELTA_X: Relative;
    static DELTA_Y: Relative;
    static DELTA_Z: Relative;
    static ROTATE_DELTA: Relative;
    static ROTATION: Relative[];
    static SET_STREAM_CODEC: StreamCodec<ByteBuf, Relative[]>;
    static X: Relative;
    static X_ROT: Relative;
    static Y: Relative;
    static Y_ROT: Relative;
    static Z: Relative;
    static direction(paramrelativeX: boolean, paramrelativeY: boolean, paramrelativeZ: boolean): Relative[];
    static pack(paramset: Relative[]): number;
    static position(paramrelativeX: boolean, paramrelativeY: boolean, paramrelativeZ: boolean): Relative[];
    static rotation(paramrelativeYRot: boolean, paramrelativeXRot: boolean): Relative[];
    static union(...paramsets: Object | null): Relative[];
    static unpack(paramvalue: number): Relative[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Relative;
    static values(): (Object | null)[];
    private constructor(bit: number)
    // private bit: number;
    // private getMask(): number;
    // private isSet(value: number): boolean;
    name(): "X" | "Y" | "Z" | "Y_ROT" | "X_ROT" | "DELTA_X" | "DELTA_Y" | "DELTA_Z" | "ROTATE_DELTA";
}