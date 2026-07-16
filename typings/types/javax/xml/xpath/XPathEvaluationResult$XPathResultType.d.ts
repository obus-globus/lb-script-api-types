import type { Class } from '../../../java/lang/Class.d.ts'
import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class XPathEvaluationResult$XPathResultType extends Enum<XPathEvaluationResult$XPathResultType> {
    static ANY: XPathEvaluationResult$XPathResultType;
    static BOOLEAN: XPathEvaluationResult$XPathResultType;
    static NODE: XPathEvaluationResult$XPathResultType;
    static NODESET: XPathEvaluationResult$XPathResultType;
    static NUMBER: XPathEvaluationResult$XPathResultType;
    static STRING: XPathEvaluationResult$XPathResultType;
    static getQNameType(paramarg0: Class<Object>): QName;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): XPathEvaluationResult$XPathResultType;
    static values(): XPathEvaluationResult$XPathResultType[];
    private constructor(arg2: QName, arg3: Class<Object>)
    // private clsType: Class<Object>;
    // private qnameType: QName;
    // private equalsClassType(arg0: Class<Object>): boolean;
    // private isAcceptedNumberSubType(arg0: Class<Object>): boolean;
    name(): "ANY" | "BOOLEAN" | "NUMBER" | "STRING" | "NODESET" | "NODE";
}