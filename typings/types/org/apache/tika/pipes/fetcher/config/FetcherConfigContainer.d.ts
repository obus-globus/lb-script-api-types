import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FetcherConfigContainer extends Object {
    constructor()
    readonly configClassName: string;
    readonly json: string;
    getConfigClassName(): string;
    getJson(): string;
    setConfigClassName(arg0: string): FetcherConfigContainer;
    setJson(arg0: string): FetcherConfigContainer;
}