import type { Placeholder } from '../../../../eu/pb4/placeholders/api/Placeholder.d.ts'
import type { PlaceholderResult } from '../../../../eu/pb4/placeholders/api/PlaceholderResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Placeholder$ArgumentedHandler<Ctx extends unknown, T extends unknown> extends Record {
    constructor(placeholder: Placeholder<Ctx, T>, argument: T)
    // private argument: T;
    // private placeholder: Placeholder<Ctx, T>;
    argument(): T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onPlaceholderRequest(arg0: Ctx): PlaceholderResult;
    placeholder(): Placeholder<Ctx, T>;
    toString(): string;
}