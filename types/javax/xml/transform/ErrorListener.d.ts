import type { TransformerException } from '../../../javax/xml/transform/TransformerException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ErrorListener extends Object{
    error(arg0: TransformerException): void;
    fatalError(arg0: TransformerException): void;
    warning(arg0: TransformerException): void;
}