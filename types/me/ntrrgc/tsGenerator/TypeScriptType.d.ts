import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeScriptType$Companion } from '../../../me/ntrrgc/tsGenerator/TypeScriptType$Companion.d.ts'
export class TypeScriptType extends Object {
    static Companion: TypeScriptType$Companion;
    private constructor(types: string[])
    readonly types: string[];
    formatWithParenthesis(): string;
    formatWithoutParenthesis(): string;
    or(other: TypeScriptType): TypeScriptType;
}