import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ParseState } from '../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
export interface SnbtOperations$BuiltinOperation extends Object{
    run<T extends unknown>(ops: DynamicOps<T>, arguments: T[], state: ParseState<StringReader>): T;
}