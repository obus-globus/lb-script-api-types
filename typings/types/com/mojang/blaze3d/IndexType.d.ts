import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IndexType extends Enum<IndexType> {
    static INT: IndexType;
    static SHORT: IndexType;
    static least(paramlength: number): IndexType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IndexType;
    static values(): IndexType[];
    private constructor(bytes: number)
    bytes: number;
    name(): "SHORT" | "INT";
}