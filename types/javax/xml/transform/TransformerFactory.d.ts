import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { ErrorListener } from '../../../javax/xml/transform/ErrorListener.d.ts'
import type { Source } from '../../../javax/xml/transform/Source.d.ts'
import type { Templates } from '../../../javax/xml/transform/Templates.d.ts'
import type { Transformer } from '../../../javax/xml/transform/Transformer.d.ts'
import type { URIResolver } from '../../../javax/xml/transform/URIResolver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class TransformerFactory extends Object {
    static newDefaultInstance(): TransformerFactory;
    static newInstance(): TransformerFactory;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): TransformerFactory;
    constructor()
    getAssociatedStylesheet(arg0: Source, arg1: string, arg2: string, arg3: string): Source;
    getAttribute(arg0: string): Object;
    getErrorListener(): ErrorListener;
    getFeature(arg0: string): boolean;
    getURIResolver(): URIResolver;
    newTemplates(arg0: Source): Templates;
    newTransformer(): Transformer;
    newTransformer(arg0: Source): Transformer;
    setAttribute(arg0: string, arg1: Object): void;
    setErrorListener(arg0: ErrorListener): void;
    setFeature(arg0: string, arg1: boolean): void;
    setURIResolver(arg0: URIResolver): void;
}