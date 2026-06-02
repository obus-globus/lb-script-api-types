import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Average1DEstimator$Value } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$Value.d.ts'
import type { MeshResultSize$SectionCategory } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshResultSize$SectionCategory.d.ts'
export class MeshResultSize extends Record implements Average1DEstimator$Value<MeshResultSize$SectionCategory> {
    static NO_DATA: number;
    // private category: MeshResultSize$SectionCategory;
    // private resultSize: number;
    category(): MeshResultSize$SectionCategory;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    resultSize(): number;
    toString(): string;
    value(): number;
}