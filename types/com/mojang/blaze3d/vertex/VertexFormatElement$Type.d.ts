import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class VertexFormatElement$Type extends Enum<VertexFormatElement$Type> {
    static BYTE: VertexFormatElement$Type;
    static FLOAT: VertexFormatElement$Type;
    static INT: VertexFormatElement$Type;
    static SHORT: VertexFormatElement$Type;
    static UBYTE: VertexFormatElement$Type;
    static UINT: VertexFormatElement$Type;
    static USHORT: VertexFormatElement$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): VertexFormatElement$Type;
    static values(): (Object | null)[];
    private constructor(size: number, name: string)
    // private name: string;
    // private size: number;
    size(): number;
    toString(): string;
    name(): "FLOAT" | "UBYTE" | "BYTE" | "USHORT" | "SHORT" | "UINT" | "INT";
}