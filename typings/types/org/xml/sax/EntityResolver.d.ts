import type { Object } from '../../../java/lang/Object.d.ts'
import type { InputSource } from '../../../org/xml/sax/InputSource.d.ts'
export interface EntityResolver extends Object{
    resolveEntity(arg0: string, arg1: string): InputSource;
}