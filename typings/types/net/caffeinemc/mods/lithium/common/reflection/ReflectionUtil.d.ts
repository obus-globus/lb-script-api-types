import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ReflectionUtil extends Object {
    static hasMethodOverride(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: boolean, paramarg3: string, ...paramarg4: Object | null): boolean;
    static isBlockStateEntityTouchable(paramarg0: BlockState): boolean;
    constructor()
}