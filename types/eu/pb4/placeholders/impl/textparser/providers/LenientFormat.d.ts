import type { TagLikeParser$Context } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Context.d.ts'
import type { TagLikeParser$Format$Tag } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Format$Tag.d.ts'
import type { TagLikeParser$Provider } from '../../../../../../eu/pb4/placeholders/api/parsers/TagLikeParser$Provider.d.ts'
import type { BaseFormat } from '../../../../../../eu/pb4/placeholders/api/parsers/format/BaseFormat.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LenientFormat extends Record implements BaseFormat {
    static DEFAULT_ARGUMENT_WRAPPER: string[];
    static INSTANCE: LenientFormat;
    static LEGACY_ARGUMENT_WRAPPER: string[];
    constructor()
    argumentWrappers(): string[];
    endLength(): number;
    equals(arg0: Object | null): boolean;
    findAt(arg0: string, arg1: number, arg2: TagLikeParser$Provider, arg3: TagLikeParser$Context): TagLikeParser$Format$Tag;
    hasArgument(): boolean;
    hashCode(): number;
    index(): number;
    matchArgument(arg0: string, arg1: number): number;
    matchEnd(arg0: string, arg1: number): number;
    matchStart(arg0: string, arg1: number): number;
    toString(): string;
}