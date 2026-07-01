import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { Explanation$ErrorKind } from '../../../../../net/fabricmc/loader/impl/discovery/Explanation$ErrorKind.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
export class Explanation extends Object implements Comparable<Explanation> {
    constructor(arg0: Explanation$ErrorKind, arg1: string)
    constructor(arg0: Explanation$ErrorKind, arg1: ModCandidateImpl)
    constructor(arg0: Explanation$ErrorKind, arg1: ModCandidateImpl, arg2: string)
    constructor(arg0: Explanation$ErrorKind, arg1: ModCandidateImpl, arg2: ModDependency)
    // private cmpId: number;
    // private data: string;
    // private dep: ModDependency;
    // private error: Explanation$ErrorKind;
    // private mod: ModCandidateImpl;
    compareTo(arg0: Explanation): number;
    toString(): string;
}