import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { GitIdentifiers$FileMode } from '../../../../../org/apache/commons/codec/digest/GitIdentifiers$FileMode.d.ts'
export class GitIdentifiers$DirectoryEntry extends Object implements Comparable<GitIdentifiers$DirectoryEntry> {
    constructor(arg0: string, arg1: GitIdentifiers$FileMode, arg2: number[])
    // private name: string;
    // private rawObjectId: number[];
    // private sortKey: string;
    // private type: GitIdentifiers$FileMode;
    compareTo(arg0: GitIdentifiers$DirectoryEntry): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}