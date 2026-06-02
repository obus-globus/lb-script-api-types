import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BiMappings extends Mappings, Object{
    contains(arg0: number): boolean;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): BiMappings;
    isIdentity(): boolean;
}