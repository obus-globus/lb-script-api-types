import type { BindingPolicy } from '../../../../com/microsoft/aad/msal4j/BindingPolicy.d.ts'
import type { MexParser$PolicySelector } from '../../../../com/microsoft/aad/msal4j/MexParser$PolicySelector.d.ts'
import type { XPath } from '../../../../javax/xml/xpath/XPath.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
export class MexParser$NegotiateAuthenticationPolicySelector extends Object implements MexParser$PolicySelector {
    private constructor()
    selectPolicies(arg0: Document, arg1: XPath, arg2: boolean): { [key: string]: BindingPolicy };
}