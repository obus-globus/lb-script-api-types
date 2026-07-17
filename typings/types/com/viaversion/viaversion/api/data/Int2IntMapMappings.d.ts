import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntMapMappings extends Object implements Mappings {
    static of(): Int2IntMapMappings;
    static of(paramarg0: JavaMap<any, any>, paramarg1: number): Int2IntMapMappings;
    constructor(arg0: JavaMap<any, any>, arg1: number)
    // private mappedIds: number;
    // private mappings: JavaMap<any, any>;
    contains(arg0: number): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): Mappings;
    isIdentity(): boolean;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}