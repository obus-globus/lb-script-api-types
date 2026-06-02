import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocalePriorityList$Builder extends Object {
    private constructor()
    private constructor(list: ULocale[])
    // private built: ULocale[];
    // private hasWeights: boolean;
    // private languageToWeight: Map<ULocale, number>;
    add(locales: ULocale[]): LocalePriorityList$Builder;
    add(acceptLanguageList: string): LocalePriorityList$Builder;
    add(list: ULocale[]): LocalePriorityList$Builder;
    add(locale: ULocale): LocalePriorityList$Builder;
    add(locale: ULocale, weight: number): LocalePriorityList$Builder;
    build(): ULocale[];
    build(preserveWeights: boolean): ULocale[];
}