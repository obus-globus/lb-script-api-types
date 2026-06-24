import type { IndexType } from '../../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SectionMesh$SectionDraw extends Record {
    constructor(indexCount: number, indexType: IndexType, hasCustomIndexBuffer: boolean)
    // private hasCustomIndexBuffer: boolean;
    // private indexCount: number;
    // private indexType: IndexType;
    equals(o: Object | null): boolean;
    hasCustomIndexBuffer(): boolean;
    hashCode(): number;
    indexCount(): number;
    indexType(): IndexType;
    toString(): string;
}