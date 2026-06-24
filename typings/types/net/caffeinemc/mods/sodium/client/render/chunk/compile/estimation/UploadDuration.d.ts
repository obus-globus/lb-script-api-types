import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Abstract2DLinearEstimator$DataPair } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator$DataPair.d.ts'
export class UploadDuration extends Record implements Abstract2DLinearEstimator$DataPair<void> {
    constructor(uploadDuration: number, size: number)
    // private size: number;
    // private uploadDuration: number;
    category(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    size(): number;
    toString(): string;
    uploadDuration(): number;
    x(): number;
    y(): number;
}