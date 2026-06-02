import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
export class MeshResultSize$SectionCategory extends Enum<MeshResultSize$SectionCategory> {
    static HIGH: MeshResultSize$SectionCategory;
    static LOW: MeshResultSize$SectionCategory;
    static SURFACE: MeshResultSize$SectionCategory;
    static UNDERGROUND: MeshResultSize$SectionCategory;
    static WATER_LEVEL: MeshResultSize$SectionCategory;
    static forSection(paramarg0: RenderSection, paramarg1: number): MeshResultSize$SectionCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MeshResultSize$SectionCategory;
    static values(): (Object | null)[];
    private constructor()
    name(): "LOW" | "UNDERGROUND" | "WATER_LEVEL" | "SURFACE" | "HIGH";
}