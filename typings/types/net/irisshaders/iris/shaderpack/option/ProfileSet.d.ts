import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionSet } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { Profile } from '../../../../../net/irisshaders/iris/shaderpack/option/Profile.d.ts'
import type { ProfileSet$ProfileResult } from '../../../../../net/irisshaders/iris/shaderpack/option/ProfileSet$ProfileResult.d.ts'
import type { OptionValues } from '../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class ProfileSet extends Object {
    static fromTree(paramarg0: JavaMap<string, string[]>, paramarg1: OptionSet): ProfileSet;
    constructor(arg0: JavaMap<string, Profile>)
    // private orderedProfiles: JavaMap<string, Profile>;
    // private sortedProfiles: Profile[];
    forEach(arg0: (param0: string, param1: Profile) => void): void;
    scan(arg0: OptionSet, arg1: OptionValues): ProfileSet$ProfileResult;
    size(): number;
}