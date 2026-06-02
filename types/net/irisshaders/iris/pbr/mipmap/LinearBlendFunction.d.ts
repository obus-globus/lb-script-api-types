import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChannelMipmapGenerator$BlendFunction } from '../../../../../net/irisshaders/iris/pbr/mipmap/ChannelMipmapGenerator$BlendFunction.d.ts'
export class LinearBlendFunction extends Object implements ChannelMipmapGenerator$BlendFunction {
    static INSTANCE: LinearBlendFunction;
    constructor()
    blend(arg0: number, arg1: number, arg2: number, arg3: number): number;
}