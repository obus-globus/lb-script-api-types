import type { UnicodeSet$Filter } from '../../../../com/ibm/icu/text/UnicodeSet$Filter.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnicodeSet$VersionFilter extends Object implements UnicodeSet$Filter {
    constructor(arg0: VersionInfo)
    // private version: VersionInfo;
    contains(arg0: number): boolean;
}