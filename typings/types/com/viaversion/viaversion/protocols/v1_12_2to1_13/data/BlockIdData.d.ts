import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockIdData extends Object {
    static PREVIOUS: (Object | null)[];
    static blockIdMapping: { [key: string]: (Object | null)[] };
    static fallbackReverseMapping: { [key: string]: (Object | null)[] };
    static numberIdToString: Int2ObjectMap<string>;
    static init(): void;
    constructor()
}