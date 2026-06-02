import type { NamespaceContext } from '../../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class NamespaceContextImpl extends Object implements NamespaceContext {
    constructor()
    getNamespaceURI(arg0: string): string;
    getPrefix(arg0: string): string;
    getPrefixes(arg0: string): Iterator<Object>;
    modifyNameSpace(arg0: string, arg1: string): void;
}