import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
export interface Forest extends Object{
    add(arg0: number, arg1: number, arg2: number): void;
    add(arg0: RenderSection): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    isSectionPresent(arg0: number, arg1: number, arg2: number): boolean;
}