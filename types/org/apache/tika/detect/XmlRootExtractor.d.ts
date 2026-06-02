import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class XmlRootExtractor extends Object {
    constructor()
    extractRootElement(arg0: InputStream): QName;
    // private extractRootElement(arg0: InputStream, arg1: boolean): QName;
    extractRootElement(arg0: number[]): QName;
}