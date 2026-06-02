import type { TagLikeParser$Context } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TagLikeParser$Provider extends Object{
    handleTag(arg0: string, arg1: string, arg2: TagLikeParser$Context): void;
    isValidTag(arg0: string, arg1: TagLikeParser$Context): boolean;
    modifyTag(arg0: TagLikeParser$Format$Tag, arg1: TagLikeParser$Context): TagLikeParser$Format$Tag;
}