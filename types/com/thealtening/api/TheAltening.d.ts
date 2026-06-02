import type { AsynchronousDataRetriever } from '../../../com/thealtening/api/retriever/AsynchronousDataRetriever.d.ts'
import type { BasicDataRetriever } from '../../../com/thealtening/api/retriever/BasicDataRetriever.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TheAltening extends Object {
    static newAsyncRetriever(paramarg0: string): AsynchronousDataRetriever;
    static newBasicRetriever(paramarg0: string): BasicDataRetriever;
    constructor()
}