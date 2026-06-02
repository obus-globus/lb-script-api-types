import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export interface NamespaceContext extends Object{
    getNamespaceURI(arg0: string): string;
    getPrefix(arg0: string): string;
    getPrefixes(arg0: string): Iterator<string>;
}