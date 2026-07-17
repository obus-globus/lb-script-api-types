import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PermissionLevel extends Enum<PermissionLevel> implements StringRepresentable {
    static ADMINS: PermissionLevel;
    static ALL: PermissionLevel;
    static CODEC: Codec<PermissionLevel>;
    static GAMEMASTERS: PermissionLevel;
    static INT_CODEC: Codec<PermissionLevel>;
    static MODERATORS: PermissionLevel;
    static OWNERS: PermissionLevel;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static byId(paramlevel: number): PermissionLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PermissionLevel;
    static values(): PermissionLevel[];
    private constructor(name: string, id: number)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    isEqualOrHigherThan(other: PermissionLevel): boolean;
    name(): "ALL" | "MODERATORS" | "GAMEMASTERS" | "ADMINS" | "OWNERS";
}