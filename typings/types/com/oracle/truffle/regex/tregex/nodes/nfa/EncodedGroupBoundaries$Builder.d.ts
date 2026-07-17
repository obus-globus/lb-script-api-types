import type { GroupBoundaries } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class EncodedGroupBoundaries$Builder extends Object {
    constructor()
    // private groupBoundariesBuffer: number[];
    // private groupBoundariesMap: EconomicMap<GroupBoundaries, number>;
    getOrCreate(gb: GroupBoundaries): number;
    toArray(): number[];
}