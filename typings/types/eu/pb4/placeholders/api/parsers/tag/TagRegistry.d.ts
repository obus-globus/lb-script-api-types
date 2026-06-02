import type { TextTag } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TagRegistry extends Object{
    copy(): TagRegistry;
    getTag(arg0: string): TextTag;
    getTags(): TextTag[];
    isGlobal(): boolean;
    register(arg0: TextTag): void;
    remove(arg0: TextTag): void;
}