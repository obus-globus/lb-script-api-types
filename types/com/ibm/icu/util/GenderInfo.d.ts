import type { GenderInfo$Gender } from '../../../../com/ibm/icu/util/GenderInfo$Gender.d.ts'
import type { GenderInfo$ListGenderStyle } from '../../../../com/ibm/icu/util/GenderInfo$ListGenderStyle.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GenderInfo extends Object {
    static getInstance(paramarg0: ULocale): GenderInfo;
    static getInstance(paramarg0: Locale): GenderInfo;
    constructor(arg0: GenderInfo$ListGenderStyle)
    // private style: GenderInfo$ListGenderStyle;
    getListGender(arg0: GenderInfo$Gender[]): GenderInfo$Gender;
    getListGender(arg0: GenderInfo$Gender[]): GenderInfo$Gender;
}