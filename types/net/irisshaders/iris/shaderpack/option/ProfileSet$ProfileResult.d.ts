import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Profile } from '../../../../../net/irisshaders/iris/shaderpack/option/Profile.d.ts'
export class ProfileSet$ProfileResult extends Object {
    private constructor(arg0: Profile, arg1: Profile, arg2: Profile)
    current: Optional<Profile>;
    next: Profile;
    previous: Profile;
}