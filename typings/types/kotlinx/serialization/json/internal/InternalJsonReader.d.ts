import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalJsonReader extends Object{
    read(buffer: string[], bufferOffset: number, count: number): number;
}