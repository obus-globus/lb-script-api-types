import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockIdData extends Object {
    static PREVIOUS: string[];
    static blockIdMapping: JavaMap<string, string[]>;
    static fallbackReverseMapping: JavaMap<string, string[]>;
    static numberIdToString: JavaMap<any, any>;
    static init(): void;
    constructor()
}