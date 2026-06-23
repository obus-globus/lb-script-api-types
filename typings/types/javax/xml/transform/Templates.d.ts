import type { Transformer } from '../../../javax/xml/transform/Transformer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Templates extends Object{
    getOutputProperties(): { [key: string]: any };
    newTransformer(): Transformer;
}