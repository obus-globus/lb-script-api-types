import type { TagLikeParser$Context } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { TagLikeParser$Provider } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BaseFormat extends TagLikeParser$Format, Object{
    argumentWrappers(): string[];
    endLength(): number;
    findAt(arg0: string, arg1: number, arg2: TagLikeParser$Provider, arg3: TagLikeParser$Context): TagLikeParser$Format$Tag;
    findFirst(arg0: string, arg1: number, arg2: TagLikeParser$Provider, arg3: TagLikeParser$Context): TagLikeParser$Format$Tag;
    hasArgument(): boolean;
    index(): number;
    matchArgument(arg0: string, arg1: number): number;
    matchEnd(arg0: string, arg1: number): number;
    matchStart(arg0: string, arg1: number): number;
}