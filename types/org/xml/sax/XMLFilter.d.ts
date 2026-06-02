import type { Object } from '../../../java/lang/Object.d.ts'
import type { XMLReader } from '../../../org/xml/sax/XMLReader.d.ts'
export interface XMLFilter extends Object, XMLReader{
    getParent(): XMLReader;
    setParent(arg0: XMLReader): void;
}