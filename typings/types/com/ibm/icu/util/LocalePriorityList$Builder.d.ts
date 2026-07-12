import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocalePriorityList$Builder extends Object {
    private constructor()
    private constructor(arg0: ULocale[])
    // private built: ULocale[];
    // private hasWeights: boolean;
    // private languageToWeight: Map<ULocale, number>;
    add(arg0: ULocale[]): LocalePriorityList$Builder;
    add(arg0: ULocale): LocalePriorityList$Builder;
    add(arg0: ULocale, arg1: number): LocalePriorityList$Builder;
    add(...arg0: ULocale[]): LocalePriorityList$Builder;
    add(arg0: string): LocalePriorityList$Builder;
    build(): ULocale[];
    build(arg0: boolean): ULocale[];
}