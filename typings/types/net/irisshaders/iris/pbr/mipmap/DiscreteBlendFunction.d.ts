import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChannelMipmapGenerator$BlendFunction } from '../../../../../net/irisshaders/iris/pbr/mipmap/ChannelMipmapGenerator$BlendFunction.d.ts'
export class DiscreteBlendFunction extends Object implements ChannelMipmapGenerator$BlendFunction {
    static selectTargetType(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor(arg0: (param0: number) => number)
    // private typeFunc: (param0: number) => number;
    blend(arg0: number, arg1: number, arg2: number, arg3: number): number;
}