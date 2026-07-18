import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2HeadersDecoder$Configuration extends Object{
    maxHeaderListSize(): number;
    maxHeaderListSize(arg0: number, arg1: number): void;
    maxHeaderListSizeGoAway(): number;
    maxHeaderTableSize(): number;
    maxHeaderTableSize(arg0: number): void;
}