import type { Placeholder } from '../../../../eu/pb4/placeholders/api/Placeholder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Placeholders$PlaceholderGetter<Ctx extends unknown> extends Object{
    exists(arg0: string): boolean;
    getPlaceholder(arg0: string): Placeholder<Ctx, Object>;
    getPlaceholderOrThrow(arg0: string): Placeholder<Ctx, Object>;
}