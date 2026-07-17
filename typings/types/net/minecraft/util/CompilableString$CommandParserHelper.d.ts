import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CompilableString$CommandParserHelper<T extends unknown> extends Object implements Function<string, DataResult<T>> {
    constructor()
    andThen<V extends unknown>(arg0: (param0: DataResult<T>) => V): (param0: string) => V;
    apply(contents: string): DataResult<T>;
    compose<V extends unknown>(arg0: (param0: V) => string): (param0: V) => DataResult<T>;
    errorMessage(original: string, exception: CommandSyntaxException): string;
    parse(reader: StringReader): T;
}