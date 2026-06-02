import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeSet$Filter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$Filter.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export class UnicodeSet$VersionFilter extends Object implements UnicodeSet$Filter {
    constructor(version: VersionInfo)
    // private version: VersionInfo;
    contains(ch: number): boolean;
}