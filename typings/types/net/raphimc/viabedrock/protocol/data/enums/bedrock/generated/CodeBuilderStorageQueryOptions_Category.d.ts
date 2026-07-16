import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CodeBuilderStorageQueryOptions_Category extends Enum<CodeBuilderStorageQueryOptions_Category> {
    static CodeStatus: CodeBuilderStorageQueryOptions_Category;
    static Instantiation: CodeBuilderStorageQueryOptions_Category;
    static None: CodeBuilderStorageQueryOptions_Category;
    static getByName(paramarg0: string): CodeBuilderStorageQueryOptions_Category;
    static getByName(paramarg0: string, paramarg1: CodeBuilderStorageQueryOptions_Category): CodeBuilderStorageQueryOptions_Category;
    static getByValue(paramarg0: number): CodeBuilderStorageQueryOptions_Category;
    static getByValue(paramarg0: number, paramarg1: CodeBuilderStorageQueryOptions_Category): CodeBuilderStorageQueryOptions_Category;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodeBuilderStorageQueryOptions_Category;
    static values(): CodeBuilderStorageQueryOptions_Category[];
    private constructor(arg2: number)
    private constructor(arg2: CodeBuilderStorageQueryOptions_Category)
    readonly value: number;
    getValue(): number;
    name(): "None" | "CodeStatus" | "Instantiation";
}