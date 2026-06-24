import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { Forest$TreeAddMethod } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Forest$TreeAddMethod.d.ts'
import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
export interface Forest<T extends Tree> extends Object {
    add(arg0: number, arg1: number, arg2: number): void;
    add(arg0: number, arg1: number, arg2: number, arg3: (param0: T, param1: number, param2: number, param3: number) => number): boolean;
    add(arg0: RenderSection): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    isSectionPresent(arg0: number, arg1: number, arg2: number): boolean;
}