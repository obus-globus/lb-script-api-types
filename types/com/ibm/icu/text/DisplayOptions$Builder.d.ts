import type { DisplayOptions } from '../../../../com/ibm/icu/text/DisplayOptions.d.ts'
import type { DisplayOptions$Capitalization } from '../../../../com/ibm/icu/text/DisplayOptions$Capitalization.d.ts'
import type { DisplayOptions$DisplayLength } from '../../../../com/ibm/icu/text/DisplayOptions$DisplayLength.d.ts'
import type { DisplayOptions$GrammaticalCase } from '../../../../com/ibm/icu/text/DisplayOptions$GrammaticalCase.d.ts'
import type { DisplayOptions$NameStyle } from '../../../../com/ibm/icu/text/DisplayOptions$NameStyle.d.ts'
import type { DisplayOptions$NounClass } from '../../../../com/ibm/icu/text/DisplayOptions$NounClass.d.ts'
import type { DisplayOptions$PluralCategory } from '../../../../com/ibm/icu/text/DisplayOptions$PluralCategory.d.ts'
import type { DisplayOptions$SubstituteHandling } from '../../../../com/ibm/icu/text/DisplayOptions$SubstituteHandling.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DisplayOptions$Builder extends Object {
    private constructor()
    private constructor(arg0: DisplayOptions)
    // private capitalization: DisplayOptions$Capitalization;
    // private displayLength: DisplayOptions$DisplayLength;
    // private grammaticalCase: DisplayOptions$GrammaticalCase;
    // private nameStyle: DisplayOptions$NameStyle;
    // private nounClass: DisplayOptions$NounClass;
    // private pluralCategory: DisplayOptions$PluralCategory;
    // private substituteHandling: DisplayOptions$SubstituteHandling;
    build(): DisplayOptions;
    setCapitalization(arg0: DisplayOptions$Capitalization): DisplayOptions$Builder;
    setDisplayLength(arg0: DisplayOptions$DisplayLength): DisplayOptions$Builder;
    setGrammaticalCase(arg0: DisplayOptions$GrammaticalCase): DisplayOptions$Builder;
    setNameStyle(arg0: DisplayOptions$NameStyle): DisplayOptions$Builder;
    setNounClass(arg0: DisplayOptions$NounClass): DisplayOptions$Builder;
    setPluralCategory(arg0: DisplayOptions$PluralCategory): DisplayOptions$Builder;
    setSubstituteHandling(arg0: DisplayOptions$SubstituteHandling): DisplayOptions$Builder;
}