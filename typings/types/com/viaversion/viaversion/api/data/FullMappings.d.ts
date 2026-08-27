import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullMappings extends BiMappings, Object{
    getNewId(arg0: number): number;
    id(arg0: string): number;
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    isIntIdIdentity(): boolean;
    keyFromId(arg0: number): Key;
    keyFromMappedKey(arg0: string): Key;
    mappedId(arg0: string): number;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
    mappedKeyFromKey(arg0: string): Key;
    mappedKeyFromMappedId(arg0: number): Key;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}