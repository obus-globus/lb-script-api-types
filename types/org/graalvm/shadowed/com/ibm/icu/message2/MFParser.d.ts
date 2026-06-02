import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { InputSource } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/InputSource.d.ts'
import type { MFDataModel$Annotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Annotation.d.ts'
import type { MFDataModel$Attribute } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Attribute.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Literal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Literal.d.ts'
import type { MFDataModel$LiteralOrCatchallKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$LiteralOrCatchallKey.d.ts'
import type { MFDataModel$LiteralOrVariableRef } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$LiteralOrVariableRef.d.ts'
import type { MFDataModel$Markup } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Markup.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Option } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Option.d.ts'
import type { MFDataModel$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
import type { MFDataModel$PatternPart } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$PatternPart.d.ts'
import type { MFDataModel$SelectMessage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$SelectMessage.d.ts'
import type { MFDataModel$VariableExpression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$VariableExpression.d.ts'
import type { MFDataModel$VariableRef } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$VariableRef.d.ts'
import type { MFDataModel$Variant } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Variant.d.ts'
export class MFParser extends Object {
    static parse(paraminput: string): MFDataModel$Message;
    constructor(text: string)
    // private input: InputSource;
    // private checkCondition(condition: boolean, message: string): void;
    // private error(message: string): void;
    // private getAnnotation(whitespaceRequired: boolean): MFDataModel$Annotation;
    // private getAnnotationExpression(): MFDataModel$Expression;
    // private getAttribute(): MFDataModel$Attribute;
    // private getAttributes(): MFDataModel$Attribute[];
    // private getComplexMessage(): MFDataModel$Message;
    // private getDeclaration(): MFDataModel$Declaration;
    // private getIdentifier(): string;
    // private getKey(requireSpaces: boolean): MFDataModel$LiteralOrCatchallKey;
    // private getLiteral(): MFDataModel$Literal;
    // private getLiteralExpression(): MFDataModel$Expression;
    // private getLiteralOrVariableRef(): MFDataModel$LiteralOrVariableRef;
    // private getMarkup(): MFDataModel$Markup;
    // private getMarkupAnnotation(): MFDataModel$Annotation;
    // private getMatch(declarations: MFDataModel$Declaration[]): MFDataModel$SelectMessage;
    // private getName(): string;
    // private getNumberLiteral(): MFDataModel$Literal;
    // private getOption(): MFDataModel$Option;
    // private getOptions(): { [key: string]: MFDataModel$Option };
    // private getPattern(): MFDataModel$Pattern;
    // private getPatternPart(): MFDataModel$PatternPart;
    // private getPlaceholder(): MFDataModel$Expression;
    // private getQuotedLiteral(): MFDataModel$Literal;
    // private getQuotedPattern(): MFDataModel$Pattern;
    // private getText(): string;
    // private getUnQuotedLiteral(): MFDataModel$Literal;
    // private getVariableExpression(): MFDataModel$VariableExpression;
    // private getVariableRef(): MFDataModel$VariableRef;
    // private getVariant(): MFDataModel$Variant;
    // private parseImpl(): MFDataModel$Message;
    // private peekWithRegExp(pattern: Pattern): string;
    // private skipMandatoryWhitespaces(): number;
    // private skipOptionalWhitespaces(): number;
    // private skipWhitespaces(): number;
}