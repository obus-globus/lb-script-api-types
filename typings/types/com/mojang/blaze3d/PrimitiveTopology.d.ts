import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PrimitiveTopology extends Enum<PrimitiveTopology> {
    static DEBUG_LINES: PrimitiveTopology;
    static DEBUG_LINE_STRIP: PrimitiveTopology;
    static LINES: PrimitiveTopology;
    static POINTS: PrimitiveTopology;
    static QUADS: PrimitiveTopology;
    static TRIANGLES: PrimitiveTopology;
    static TRIANGLE_FAN: PrimitiveTopology;
    static TRIANGLE_STRIP: PrimitiveTopology;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PrimitiveTopology;
    static values(): PrimitiveTopology[];
    private constructor(primitiveLength: number, primitiveStride: number, connectedPrimitives: boolean)
    connectedPrimitives: boolean;
    primitiveLength: number;
    primitiveStride: number;
    indexCount(vertexCount: number): number;
    name(): "LINES" | "DEBUG_LINES" | "DEBUG_LINE_STRIP" | "POINTS" | "TRIANGLES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN" | "QUADS";
}