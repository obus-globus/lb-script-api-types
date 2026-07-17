import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Transformer } from '../../../javax/xml/transform/Transformer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Templates extends Object{
    getOutputProperties(): JavaMap<any, any>;
    newTransformer(): Transformer;
}