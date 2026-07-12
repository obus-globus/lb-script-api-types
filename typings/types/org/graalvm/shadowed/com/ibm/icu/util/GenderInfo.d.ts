import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GenderInfo$Gender } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/GenderInfo$Gender.d.ts'
import type { GenderInfo$ListGenderStyle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/GenderInfo$ListGenderStyle.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class GenderInfo extends Object {
    static getInstance(paramlocale: Locale): GenderInfo;
    static getInstance(paramuLocale: ULocale): GenderInfo;
    constructor(genderStyle: GenderInfo$ListGenderStyle)
    // private style: GenderInfo$ListGenderStyle;
    getListGender(...genders: GenderInfo$Gender[]): GenderInfo$Gender;
    getListGender(genders: GenderInfo$Gender[]): GenderInfo$Gender;
}