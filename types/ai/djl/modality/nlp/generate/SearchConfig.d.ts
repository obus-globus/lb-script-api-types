import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SearchConfig extends Object {
    constructor()
    readonly alpha: number;
    readonly beam: number;
    readonly eosTokenId: number;
    readonly k: number;
    readonly maxSeqLength: number;
    readonly padTokenId: number;
    readonly suffixPadding: boolean;
    getAlpha(): number;
    getBeam(): number;
    getEosTokenId(): number;
    getK(): number;
    getMaxSeqLength(): number;
    getPadTokenId(): number;
    isSuffixPadding(): boolean;
    setAlpha(arg0: number): void;
    setBeam(arg0: number): void;
    setK(arg0: number): void;
    setMaxSeqLength(arg0: number): void;
    setPadTokenId(arg0: number): void;
    setSuffixPadding(arg0: boolean): void;
}