import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tesselator extends Object {
    static getInstance(): Tesselator;
    static init(): void;
    constructor()
    constructor(size: number)
    // private buffer: ByteBufferBuilder;
    begin(mode: VertexFormat$Mode, format: VertexFormat): BufferBuilder;
    clear(): void;
}