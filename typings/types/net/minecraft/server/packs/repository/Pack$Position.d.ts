import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { PackSelectionConfig } from '../../../../../net/minecraft/server/packs/PackSelectionConfig.d.ts'
export class Pack$Position extends Enum<Pack$Position> {
    static BOTTOM: Pack$Position;
    static TOP: Pack$Position;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Pack$Position;
    static values(): Pack$Position[];
    private constructor()
    insert<T extends unknown>(list: T[], value: T, converter: (param0: T) => PackSelectionConfig, reverse: boolean): number;
    opposite(): Pack$Position;
    name(): "TOP" | "BOTTOM";
}