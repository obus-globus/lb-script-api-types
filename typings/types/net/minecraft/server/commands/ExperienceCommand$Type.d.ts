import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiPredicate } from '../../../../java/util/function/BiPredicate.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class ExperienceCommand$Type extends Enum<ExperienceCommand$Type> {
    static LEVELS: ExperienceCommand$Type;
    static POINTS: ExperienceCommand$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ExperienceCommand$Type;
    static values(): ExperienceCommand$Type[];
    private constructor(name: string, add: (param0: ServerPlayer, param1: number) => void, set: (param0: ServerPlayer, param1: number) => boolean, query: (param0: ServerPlayer) => number)
    add: (param0: ServerPlayer, param1: number) => void;
    name: string;
    // private query: (param0: ServerPlayer) => number;
    set: (param0: ServerPlayer, param1: number) => boolean;
}