import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CodeBuilderStorageQueryOptions_Operation extends Enum<CodeBuilderStorageQueryOptions_Operation> {
    static Get: CodeBuilderStorageQueryOptions_Operation;
    static None: CodeBuilderStorageQueryOptions_Operation;
    static Reset: CodeBuilderStorageQueryOptions_Operation;
    static Set: CodeBuilderStorageQueryOptions_Operation;
    static getByName(paramarg0: string): CodeBuilderStorageQueryOptions_Operation;
    static getByName(paramarg0: string, paramarg1: CodeBuilderStorageQueryOptions_Operation): CodeBuilderStorageQueryOptions_Operation;
    static getByValue(paramarg0: number): CodeBuilderStorageQueryOptions_Operation;
    static getByValue(paramarg0: number, paramarg1: CodeBuilderStorageQueryOptions_Operation): CodeBuilderStorageQueryOptions_Operation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CodeBuilderStorageQueryOptions_Operation;
    static values(): CodeBuilderStorageQueryOptions_Operation[];
    private constructor(arg2: number)
    private constructor(arg2: CodeBuilderStorageQueryOptions_Operation)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Get" | "Set" | "Reset";
}