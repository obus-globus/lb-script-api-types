import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullMappings extends BiMappings, Object{
    id(arg0: string): number;
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    isIntIdIdentity(): boolean;
    mappedId(arg0: string): number;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
}