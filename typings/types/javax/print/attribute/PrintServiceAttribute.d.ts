import type { Attribute } from '../../../javax/print/attribute/Attribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PrintServiceAttribute extends Attribute, Object{
    getName(): string;
}