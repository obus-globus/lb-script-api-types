import type { ArgumentParser } from '../../../../eu/pb4/placeholders/api/ArgumentParser.d.ts'
import type { Placeholder$ArgumentedHandler } from '../../../../eu/pb4/placeholders/api/Placeholder$ArgumentedHandler.d.ts'
import type { Placeholder$Handler } from '../../../../eu/pb4/placeholders/api/Placeholder$Handler.d.ts'
import type { PlaceholderResult } from '../../../../eu/pb4/placeholders/api/PlaceholderResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class Placeholder<Ctx extends unknown, T extends unknown> extends Record {
    constructor(identifier: Identifier, argumentParser: ArgumentParser<T>, handler: (param0: Ctx, param1: T) => PlaceholderResult)
    // private argumentParser: ArgumentParser<T>;
    // private handler: (param0: Ctx, param1: T) => PlaceholderResult;
    // private identifier: Identifier;
    argumentParser(): ArgumentParser<T>;
    equals(arg0: Object | null): boolean;
    handler(): (param0: Ctx, param1: T) => PlaceholderResult;
    hashCode(): number;
    identifier(): Identifier;
    onPlaceholderRequest(arg0: Ctx, arg1: string): PlaceholderResult;
    toString(): string;
    withArgument(arg0: T): Placeholder$ArgumentedHandler<Ctx, T>;
    withId(arg0: Identifier): Placeholder<Ctx, T>;
    withParsedArgument(arg0: string): Placeholder$ArgumentedHandler<Ctx, T>;
}