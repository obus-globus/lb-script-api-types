import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Dimension extends Enum<Dimension> {
    static END: Dimension;
    static NETHER: Dimension;
    static OVERWORLD: Dimension;
    static getByValue(paramarg0: number): Dimension;
    static getDimensionKeys(): (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Dimension;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly key: string;
    getKey(): string;
    name(): "OVERWORLD" | "NETHER" | "END";
}