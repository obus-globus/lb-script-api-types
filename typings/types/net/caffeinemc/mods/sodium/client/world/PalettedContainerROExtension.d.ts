import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PalettedContainerRO } from '../../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
export interface PalettedContainerROExtension<T extends Object | number | string | boolean> extends Object{
    sodium$copy(): PalettedContainerRO<T>;
    sodium$unpack(arg0: T[]): void;
    sodium$unpack(arg0: T[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
}