import type { Deflater } from '../../../../java/util/zip/Deflater.d.ts'
import type { Inflater } from '../../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeflaterUtilsKt extends Object {
    static deflateFully(self: Deflater, data: number[]): number[];
    static inflateFully(self: Inflater, data: number[]): number[];
    static inflateFully(self: Inflater, data: number[], maxOutputSize: number): number[];
}