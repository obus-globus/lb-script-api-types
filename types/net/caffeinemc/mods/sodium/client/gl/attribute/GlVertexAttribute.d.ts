import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexAttributeFormat } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexAttributeFormat.d.ts'
export class GlVertexAttribute extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: GlVertexAttributeFormat, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: boolean)
    readonly count: number;
    readonly format: number;
    readonly intType: boolean;
    readonly normalized: boolean;
    readonly pointer: number;
    readonly size: number;
    readonly stride: number;
    getCount(): number;
    getFormat(): number;
    getPointer(): number;
    getSize(): number;
    getStride(): number;
    isIntType(): boolean;
    isNormalized(): boolean;
}