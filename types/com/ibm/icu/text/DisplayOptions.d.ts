import type { DisplayOptions$Builder } from '../../../../com/ibm/icu/text/DisplayOptions$Builder.d.ts'
import type { DisplayOptions$Capitalization } from '../../../../com/ibm/icu/text/DisplayOptions$Capitalization.d.ts'
import type { DisplayOptions$DisplayLength } from '../../../../com/ibm/icu/text/DisplayOptions$DisplayLength.d.ts'
import type { DisplayOptions$GrammaticalCase } from '../../../../com/ibm/icu/text/DisplayOptions$GrammaticalCase.d.ts'
import type { DisplayOptions$NameStyle } from '../../../../com/ibm/icu/text/DisplayOptions$NameStyle.d.ts'
import type { DisplayOptions$NounClass } from '../../../../com/ibm/icu/text/DisplayOptions$NounClass.d.ts'
import type { DisplayOptions$PluralCategory } from '../../../../com/ibm/icu/text/DisplayOptions$PluralCategory.d.ts'
import type { DisplayOptions$SubstituteHandling } from '../../../../com/ibm/icu/text/DisplayOptions$SubstituteHandling.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DisplayOptions extends Object {
    static builder(): DisplayOptions$Builder;
    private constructor(arg0: DisplayOptions$Builder)
    readonly capitalization: DisplayOptions$Capitalization;
    readonly displayLength: DisplayOptions$DisplayLength;
    readonly grammaticalCase: DisplayOptions$GrammaticalCase;
    readonly nameStyle: DisplayOptions$NameStyle;
    readonly nounClass: DisplayOptions$NounClass;
    readonly pluralCategory: DisplayOptions$PluralCategory;
    readonly substituteHandling: DisplayOptions$SubstituteHandling;
    copyToBuilder(): DisplayOptions$Builder;
    getCapitalization(): DisplayOptions$Capitalization;
    getDisplayLength(): DisplayOptions$DisplayLength;
    getGrammaticalCase(): DisplayOptions$GrammaticalCase;
    getNameStyle(): DisplayOptions$NameStyle;
    getNounClass(): DisplayOptions$NounClass;
    getPluralCategory(): DisplayOptions$PluralCategory;
    getSubstituteHandling(): DisplayOptions$SubstituteHandling;
}