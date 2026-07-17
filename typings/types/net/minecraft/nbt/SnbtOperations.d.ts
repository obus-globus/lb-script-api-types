import type { JavaMap } from '../../../JavaMap.d.ts'
import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SnbtOperations$BuiltinKey } from '../../../net/minecraft/nbt/SnbtOperations$BuiltinKey.d.ts'
import type { SnbtOperations$BuiltinOperation } from '../../../net/minecraft/nbt/SnbtOperations$BuiltinOperation.d.ts'
import type { SuggestionSupplier } from '../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export class SnbtOperations extends Object {
    static BUILTIN_FALSE: string;
    static BUILTIN_IDS: SuggestionSupplier<StringReader>;
    static BUILTIN_OPERATIONS: JavaMap<SnbtOperations$BuiltinKey, SnbtOperations$BuiltinOperation>;
    static BUILTIN_TRUE: string;
    constructor()
}