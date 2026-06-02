import type { TagLikeParser$Context } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { TagLikeParser$Provider } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TagLikeParser$Format extends Object{
    findAt(arg0: string, arg1: number, arg2: TagLikeParser$Provider, arg3: TagLikeParser$Context): TagLikeParser$Format$Tag;
    findFirst(arg0: string, arg1: number, arg2: TagLikeParser$Provider, arg3: TagLikeParser$Context): TagLikeParser$Format$Tag;
    index(): number;
}