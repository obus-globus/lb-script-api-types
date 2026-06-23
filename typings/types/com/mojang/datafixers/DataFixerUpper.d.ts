import type { DSL$TypeReference } from '../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFix } from '../../../com/mojang/datafixers/DataFix.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Schema } from '../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFixerUpper extends Object implements DataFixer {
    static ERRORS_ARE_FATAL: boolean;
    constructor(arg0: { [key: string]: any }, arg1: DataFix[], arg2: (Object | null)[])
    // private fixerVersions: (Object | null)[];
    // private globalList: DataFix[];
    // private rules: { [key: string]: any };
    // private schemas: { [key: string]: any };
    fixerVersions(): (Object | null)[];
    // private getLowestFixSameVersion(arg0: number): number;
    getRule(arg0: number, arg1: number): TypeRewriteRule;
    getSchema(arg0: number): Schema;
    getType(arg0: DSL$TypeReference, arg1: number): Type<Object>;
    update<T extends Object | number | string | boolean>(arg0: DSL$TypeReference, arg1: Dynamic<T>, arg2: number, arg3: number): Dynamic<T>;
}