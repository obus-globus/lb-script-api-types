import type { Source } from '../../../javax/xml/transform/Source.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface URIResolver extends Object{
    resolve(arg0: string, arg1: string): Source;
}