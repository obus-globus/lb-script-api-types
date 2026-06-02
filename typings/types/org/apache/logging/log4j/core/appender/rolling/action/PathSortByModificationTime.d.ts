import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PathSorter } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathSorter.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
export class PathSortByModificationTime extends Object implements Serializable, PathSorter {
    static createSorter(paramrecentFirst: boolean): PathSorter;
    constructor(recentFirst: boolean)
    // private multiplier: number;
    readonly recentFirst: boolean;
    compare(path1: PathWithAttributes, path2: PathWithAttributes): number;
    isRecentFirst(): boolean;
}