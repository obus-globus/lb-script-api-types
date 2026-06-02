import type { DataFix } from '../../../com/mojang/datafixers/DataFix.d.ts'
import type { DataFixerBuilder$Result } from '../../../com/mojang/datafixers/DataFixerBuilder$Result.d.ts'
import type { Schema } from '../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFixerBuilder extends Object {
    constructor(arg0: number)
    // private dataVersion: number;
    // private fixerVersions: (Object | null)[];
    // private globalList: DataFix[];
    // private schemas: Int2ObjectSortedMap<Schema>;
    addFixer(arg0: DataFix): void;
    addSchema(arg0: Schema): void;
    addSchema(arg0: number, arg1: (param0: number, param1: Schema) => Schema): Schema;
    addSchema(arg0: number, arg1: number, arg2: (param0: number, param1: Schema) => Schema): Schema;
    build(): DataFixerBuilder$Result;
}