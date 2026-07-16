import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockIdData extends Object {
    static PREVIOUS: string[];
    static blockIdMapping: { [key: string]: string[] };
    static fallbackReverseMapping: { [key: string]: string[] };
    static numberIdToString: { [key: string]: any };
    static init(): void;
    constructor()
}