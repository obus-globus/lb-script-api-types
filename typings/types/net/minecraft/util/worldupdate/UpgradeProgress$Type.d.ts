import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class UpgradeProgress$Type extends Enum<UpgradeProgress$Type> implements StringRepresentable {
    static FILES: UpgradeProgress$Type;
    static LEGACY_STRUCTURES: UpgradeProgress$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REGIONS: UpgradeProgress$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UpgradeProgress$Type;
    static values(): UpgradeProgress$Type[];
    private constructor(id: string)
    // private id: string;
    // private label: Component;
    getSerializedName(): string;
    label(): Component;
    name(): "FILES" | "LEGACY_STRUCTURES" | "REGIONS";
}