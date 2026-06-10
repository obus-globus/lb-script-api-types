import type { Version } from '../../../../../../com/llamalad7/mixinextras/lib/semver/Version.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Expression extends Predicate<Version>, Object {
    and(arg0: (param0: Version) => boolean): (param0: Version) => boolean;
    interpret(arg0: Version): boolean;
    negate(): (param0: Version) => boolean;
    or(arg0: (param0: Version) => boolean): (param0: Version) => boolean;
    test(arg0: Version): boolean;
}