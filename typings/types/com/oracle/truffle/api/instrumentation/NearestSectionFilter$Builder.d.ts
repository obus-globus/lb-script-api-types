import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NearestSectionFilter$Builder extends Object {
    private constructor(line: number, column: number)
    // private anchorStart: boolean;
    // private column: number;
    // private line: number;
    // private theTags: Class<Object>[];
    anchorStart(start: boolean): NearestSectionFilter$Builder;
    build(): NearestSectionFilter;
    tagIs(...tags: Class<Object>[]): NearestSectionFilter$Builder;
}