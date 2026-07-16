import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SparseFormat extends Enum<SparseFormat> {
    static COO: SparseFormat;
    static CSR: SparseFormat;
    static DENSE: SparseFormat;
    static ROW_SPARSE: SparseFormat;
    static fromValue(paramarg0: number): SparseFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SparseFormat;
    static values(): SparseFormat[];
    private constructor(arg2: string, arg3: number)
    readonly type: string;
    readonly value: number;
    getType(): string;
    getValue(): number;
    name(): "DENSE" | "ROW_SPARSE" | "CSR" | "COO";
}