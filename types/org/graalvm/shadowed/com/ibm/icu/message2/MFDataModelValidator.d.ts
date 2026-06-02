import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Variant } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Variant.d.ts'
export class MFDataModelValidator extends Object {
    constructor(message: MFDataModel$Message)
    // private declaredVars: string[];
    // private message: MFDataModel$Message;
    // private addVariableDeclaration(varName: string): boolean;
    // private error(text: string): void;
    validate(): boolean;
    // private validateDeclarations(declarations: MFDataModel$Declaration[]): boolean;
    // private validateExpression(expression: MFDataModel$Expression, fromInput: boolean): void;
    // private validateSelectors(selectors: MFDataModel$Expression[]): boolean;
    // private validateVariants(variants: MFDataModel$Variant[], selectorCount: number): boolean;
}