import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Reference } from '../../../../../../java/lang/ref/Reference.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InsightFilter extends Object {
    private constructor(allTags: Class<Tag>[], rootNameRegExp: string, sourceURI: URI, sourcePathRegExp: string, line: number, column: number, rootNameFn: Object, sourceFilterFn: Object)
    // private allTags: Class<Tag>[];
    // private column: number;
    // private line: number;
    // private rootNameFn: Reference<Object>;
    // private rootNameFnHash: number;
    // private rootNameRegExp: string;
    // private sourceFilterFn: Reference<Object>;
    // private sourceFilterFnHash: number;
    // private sourcePathRegExp: string;
    // private sourceURI: URI;
    equals(obj: Object | null): boolean;
    getColumn(): number;
    getLine(): number;
    getRootNameRegExp(): string;
    getSourcePathRegExp(): string;
    getSourceURI(): URI;
    getTags(): Class<Object>[];
    getTagsSet(): Class<Tag>[];
    hashCode(): number;
}