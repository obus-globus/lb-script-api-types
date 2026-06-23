import type { PlaceholderResult } from '../../../../eu/pb4/placeholders/api/PlaceholderResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Placeholder$Handler<Ctx extends unknown, ArgType extends unknown> extends Object{
    onPlaceholderRequest(arg0: Ctx, arg1: ArgType): PlaceholderResult;
}