import type { Class } from '../../java/lang/Class.d.ts'
import type { DocFlavor } from '../../javax/print/DocFlavor.d.ts'
import type { DocPrintJob } from '../../javax/print/DocPrintJob.d.ts'
import type { ServiceUIFactory } from '../../javax/print/ServiceUIFactory.d.ts'
import type { Attribute } from '../../javax/print/attribute/Attribute.d.ts'
import type { AttributeSet } from '../../javax/print/attribute/AttributeSet.d.ts'
import type { PrintServiceAttribute } from '../../javax/print/attribute/PrintServiceAttribute.d.ts'
import type { PrintServiceAttributeSet } from '../../javax/print/attribute/PrintServiceAttributeSet.d.ts'
import type { PrintServiceAttributeListener } from '../../javax/print/event/PrintServiceAttributeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PrintService extends Object{
    addPrintServiceAttributeListener(arg0: PrintServiceAttributeListener): void;
    createPrintJob(): DocPrintJob;
    getAttribute<T extends PrintServiceAttribute>(arg0: Class<T>): T;
    getAttributes(): PrintServiceAttributeSet;
    getDefaultAttributeValue(arg0: Class<Attribute>): Object;
    getName(): string;
    getServiceUIFactory(): ServiceUIFactory;
    getSupportedAttributeCategories(): Class<Object>[];
    getSupportedAttributeValues(arg0: Class<Attribute>, arg1: DocFlavor, arg2: AttributeSet): Object;
    getSupportedDocFlavors(): DocFlavor[];
    getUnsupportedAttributes(arg0: DocFlavor, arg1: AttributeSet): AttributeSet;
    isAttributeCategorySupported(arg0: Class<Attribute>): boolean;
    isAttributeValueSupported(arg0: Attribute, arg1: DocFlavor, arg2: AttributeSet): boolean;
    isDocFlavorSupported(arg0: DocFlavor): boolean;
    removePrintServiceAttributeListener(arg0: PrintServiceAttributeListener): void;
}