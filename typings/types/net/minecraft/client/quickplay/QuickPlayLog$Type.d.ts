import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class QuickPlayLog$Type extends Enum<QuickPlayLog$Type> implements StringRepresentable {
    static MULTIPLAYER: QuickPlayLog$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REALMS: QuickPlayLog$Type;
    static SINGLEPLAYER: QuickPlayLog$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): QuickPlayLog$Type;
    static values(): QuickPlayLog$Type[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "SINGLEPLAYER" | "MULTIPLAYER" | "REALMS";
}