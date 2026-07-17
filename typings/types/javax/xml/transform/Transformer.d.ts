import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ErrorListener } from '../../../javax/xml/transform/ErrorListener.d.ts'
import type { Result } from '../../../javax/xml/transform/Result.d.ts'
import type { Source } from '../../../javax/xml/transform/Source.d.ts'
import type { URIResolver } from '../../../javax/xml/transform/URIResolver.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Transformer extends Object {
    constructor()
    clearParameters(): void;
    getErrorListener(): ErrorListener;
    getOutputProperties(): JavaMap<any, any>;
    getOutputProperty(arg0: string): string;
    getParameter(arg0: string): Object;
    getURIResolver(): URIResolver;
    reset(): void;
    setErrorListener(arg0: ErrorListener): void;
    setOutputProperties(arg0: JavaMap<any, any>): void;
    setOutputProperty(arg0: string, arg1: string): void;
    setParameter(arg0: string, arg1: Object): void;
    setURIResolver(arg0: URIResolver): void;
    transform(arg0: Source, arg1: Result): void;
}