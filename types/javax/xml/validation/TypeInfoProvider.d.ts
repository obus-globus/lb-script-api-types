import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeInfo } from '../../../org/w3c/dom/TypeInfo.d.ts'
export abstract class TypeInfoProvider extends Object {
    constructor()
    getAttributeTypeInfo(arg0: number): TypeInfo;
    getElementTypeInfo(): TypeInfo;
    isIdAttribute(arg0: number): boolean;
    isSpecified(arg0: number): boolean;
}