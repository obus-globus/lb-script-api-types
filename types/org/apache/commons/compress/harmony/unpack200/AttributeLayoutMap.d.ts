import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttributeLayout } from '../../../../../../org/apache/commons/compress/harmony/unpack200/AttributeLayout.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands.d.ts'
export class AttributeLayoutMap extends Object {
    constructor()
    // private classLayouts: { [key: number]: AttributeLayout };
    // private codeLayouts: { [key: number]: AttributeLayout };
    // private fieldLayouts: { [key: number]: AttributeLayout };
    // private layouts: { [key: number]: AttributeLayout }[];
    // private layoutsToBands: Map<AttributeLayout, NewAttributeBands>;
    // private methodLayouts: { [key: number]: AttributeLayout };
    add(arg0: AttributeLayout): void;
    add(arg0: AttributeLayout, arg1: NewAttributeBands): void;
    checkMap(): void;
    getAttributeBands(arg0: AttributeLayout): NewAttributeBands;
    getAttributeLayout(arg0: number, arg1: number): AttributeLayout;
    getAttributeLayout(arg0: string, arg1: number): AttributeLayout;
    // private getLayout(arg0: number): { [key: number]: AttributeLayout };
}