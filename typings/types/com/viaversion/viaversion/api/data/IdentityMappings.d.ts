import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IdentityMappings extends Record implements Mappings {
    static isFullIdentity(paramarg0: Mappings): boolean;
    static isIntIdIdentity(paramarg0: Mappings): boolean;
    constructor(size: number, mappedSize: number)
    // private mappedSize: number;
    // private size: number;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    hashCode(): number;
    inverse(): Mappings;
    isIdentity(): boolean;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
    toString(): string;
}