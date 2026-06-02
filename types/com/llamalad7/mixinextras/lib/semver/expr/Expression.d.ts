import type { Version } from '../../../../../../com/llamalad7/mixinextras/lib/semver/Version.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Expression extends Predicate<Version>, Object{
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    interpret(arg0: Version): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(arg0: Version): boolean;
}