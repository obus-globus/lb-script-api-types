import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class VertexFormat$Mode extends Enum<VertexFormat$Mode> {
    static DEBUG_LINES: VertexFormat$Mode;
    static DEBUG_LINE_STRIP: VertexFormat$Mode;
    static LINES: VertexFormat$Mode;
    static POINTS: VertexFormat$Mode;
    static QUADS: VertexFormat$Mode;
    static TRIANGLES: VertexFormat$Mode;
    static TRIANGLE_FAN: VertexFormat$Mode;
    static TRIANGLE_STRIP: VertexFormat$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): VertexFormat$Mode;
    static values(): (Object | null)[];
    private constructor(primitiveLength: number, primitiveStride: number, connectedPrimitives: boolean)
    connectedPrimitives: boolean;
    primitiveLength: number;
    primitiveStride: number;
    indexCount(vertexCount: number): number;
    name(): "LINES" | "DEBUG_LINES" | "DEBUG_LINE_STRIP" | "POINTS" | "TRIANGLES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN" | "QUADS";
}