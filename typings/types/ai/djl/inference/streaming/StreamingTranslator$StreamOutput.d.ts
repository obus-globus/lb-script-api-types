import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class StreamingTranslator$StreamOutput<O extends unknown> extends Object {
    constructor()
    // private computed: boolean;
    // private output: O;
    buildAsyncOutput(): O;
    computeAsyncOutput(): void;
    computeAsyncOutputInternal(arg0: O): void;
    getAsyncOutput(): O;
    getIterativeOutput(): O;
    getIterativeOutputInternal(): O;
}