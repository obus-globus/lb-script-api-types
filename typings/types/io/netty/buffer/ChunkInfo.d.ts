import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChunkInfo extends Object{
    capacity(): number;
    isDirect(): boolean;
    memoryAddress(): number;
}