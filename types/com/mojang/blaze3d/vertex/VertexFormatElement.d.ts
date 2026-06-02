import type { VertexFormatElement$Type } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement$Type.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VertexFormatElement extends Record {
    static COLOR: VertexFormatElement;
    static LINE_WIDTH: VertexFormatElement;
    static MAX_COUNT: number;
    static NORMAL: VertexFormatElement;
    static POSITION: VertexFormatElement;
    static UV: VertexFormatElement;
    static UV0: VertexFormatElement;
    static UV1: VertexFormatElement;
    static UV2: VertexFormatElement;
    static byId(paramid: number): VertexFormatElement;
    static elementsFromMask(parammask: number): Stream<VertexFormatElement>;
    static register(paramid: number, paramindex: number, paramtype: VertexFormatElement$Type, paramnormalized: boolean, paramcount: number): VertexFormatElement;
    // private count: number;
    // private id: number;
    // private index: number;
    // private normalized: boolean;
    // private type: VertexFormatElement$Type;
    byteSize(): number;
    count(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): number;
    index(): number;
    mask(): number;
    normalized(): boolean;
    toString(): string;
    type(): VertexFormatElement$Type;
}