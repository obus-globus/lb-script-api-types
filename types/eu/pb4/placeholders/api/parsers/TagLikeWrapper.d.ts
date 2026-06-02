import type { TagLikeParser } from '../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TagLikeWrapper extends Object{
    asTagLikeParser(): TagLikeParser;
}