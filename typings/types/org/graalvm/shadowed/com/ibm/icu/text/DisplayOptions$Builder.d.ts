import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DisplayOptions } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions.d.ts'
import type { DisplayOptions$Capitalization } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$Capitalization.d.ts'
import type { DisplayOptions$DisplayLength } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$DisplayLength.d.ts'
import type { DisplayOptions$GrammaticalCase } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$GrammaticalCase.d.ts'
import type { DisplayOptions$NameStyle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$NameStyle.d.ts'
import type { DisplayOptions$NounClass } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$NounClass.d.ts'
import type { DisplayOptions$PluralCategory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$PluralCategory.d.ts'
import type { DisplayOptions$SubstituteHandling } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayOptions$SubstituteHandling.d.ts'
export class DisplayOptions$Builder extends Object {
    private constructor()
    private constructor(displayOptions: DisplayOptions)
    // private capitalization: DisplayOptions$Capitalization;
    // private displayLength: DisplayOptions$DisplayLength;
    // private grammaticalCase: DisplayOptions$GrammaticalCase;
    // private nameStyle: DisplayOptions$NameStyle;
    // private nounClass: DisplayOptions$NounClass;
    // private pluralCategory: DisplayOptions$PluralCategory;
    // private substituteHandling: DisplayOptions$SubstituteHandling;
    build(): DisplayOptions;
    setCapitalization(capitalization: DisplayOptions$Capitalization): DisplayOptions$Builder;
    setDisplayLength(displayLength: DisplayOptions$DisplayLength): DisplayOptions$Builder;
    setGrammaticalCase(grammaticalCase: DisplayOptions$GrammaticalCase): DisplayOptions$Builder;
    setNameStyle(nameStyle: DisplayOptions$NameStyle): DisplayOptions$Builder;
    setNounClass(nounClass: DisplayOptions$NounClass): DisplayOptions$Builder;
    setPluralCategory(pluralCategory: DisplayOptions$PluralCategory): DisplayOptions$Builder;
    setSubstituteHandling(substituteHandling: DisplayOptions$SubstituteHandling): DisplayOptions$Builder;
}