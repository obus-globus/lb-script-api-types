import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IndexType extends Enum<IndexType> {
    static INT: IndexType;
    static SHORT: IndexType;
    static least(paramlength: number): IndexType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): IndexType;
    static values(): (Object | null)[];
    private constructor(bytes: number)
    bytes: number;
    name(): "SHORT" | "INT";
}