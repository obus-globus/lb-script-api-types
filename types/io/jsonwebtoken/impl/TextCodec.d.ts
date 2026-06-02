import type { Object } from '../../../java/lang/Object.d.ts'
export interface TextCodec extends Object{
    decode(arg0: string): number[];
    decodeToString(arg0: string): string;
    encode(arg0: number[]): string;
    encode(arg0: string): string;
}