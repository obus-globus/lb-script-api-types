import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class VertexFormat$IndexType extends Enum<VertexFormat$IndexType> {
    static INT: VertexFormat$IndexType;
    static SHORT: VertexFormat$IndexType;
    static least(paramlength: number): VertexFormat$IndexType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): VertexFormat$IndexType;
    static values(): (Object | null)[];
    private constructor(bytes: number)
    bytes: number;
    name(): "SHORT" | "INT";
}