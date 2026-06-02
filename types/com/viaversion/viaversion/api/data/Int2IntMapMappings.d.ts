import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntMapMappings extends Object implements Mappings {
    static isFullIdentity(paramarg0: Mappings): boolean;
    static isIntIdIdentity(paramarg0: Mappings): boolean;
    static of(): Int2IntMapMappings;
    static of(paramarg0: Int2IntMap, paramarg1: number): Int2IntMapMappings;
    constructor(arg0: Int2IntMap, arg1: number)
    // private mappedIds: number;
    // private mappings: Int2IntMap;
    contains(arg0: number): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): Mappings;
    isIdentity(): boolean;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}