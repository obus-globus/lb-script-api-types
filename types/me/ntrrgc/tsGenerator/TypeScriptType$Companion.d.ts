import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeScriptType } from '../../../me/ntrrgc/tsGenerator/TypeScriptType.d.ts'
import type { VoidType } from '../../../me/ntrrgc/tsGenerator/VoidType.d.ts'
export class TypeScriptType$Companion extends Object {
    single(type: string, nullable: boolean, voidType: VoidType): TypeScriptType;
    union(types: string[]): TypeScriptType;
}