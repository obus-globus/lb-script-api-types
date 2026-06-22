import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BiMappings extends Mappings, Object{
    contains(arg0: number): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): BiMappings;
    isIdentity(): boolean;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}