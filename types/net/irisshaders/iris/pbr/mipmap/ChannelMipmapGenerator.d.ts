import type { AbstractMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/AbstractMipmapGenerator.d.ts'
import type { ChannelMipmapGenerator$BlendFunction } from '../../../../../net/irisshaders/iris/pbr/mipmap/ChannelMipmapGenerator$BlendFunction.d.ts'
export class ChannelMipmapGenerator extends AbstractMipmapGenerator {
    constructor(arg0: ChannelMipmapGenerator$BlendFunction, arg1: ChannelMipmapGenerator$BlendFunction, arg2: ChannelMipmapGenerator$BlendFunction, arg3: ChannelMipmapGenerator$BlendFunction)
    // private alphaFunc: ChannelMipmapGenerator$BlendFunction;
    // private blueFunc: ChannelMipmapGenerator$BlendFunction;
    // private greenFunc: ChannelMipmapGenerator$BlendFunction;
    // private redFunc: ChannelMipmapGenerator$BlendFunction;
    blend(arg0: number, arg1: number, arg2: number, arg3: number): number;
    // private packABGR(arg0: number, arg1: number, arg2: number, arg3: number): number;
}