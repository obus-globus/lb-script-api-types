import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResolverTuple extends Object {
    constructor(arg0: Tag, arg1: Pattern, arg2: number)
    readonly limit: number;
    readonly regexp: Pattern;
    readonly tag: Tag;
    getLimit(): number;
    getRegexp(): Pattern;
    getTag(): Tag;
    toString(): string;
}