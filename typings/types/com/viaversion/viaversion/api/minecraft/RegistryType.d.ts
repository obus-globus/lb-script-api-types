import type { RegistryKey } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RegistryType extends Enum<RegistryType> implements RegistryKey {
    static BANNER_PATTERN: RegistryType;
    static BLOCK: RegistryType;
    static DAMAGE_TYPE: RegistryType;
    static ENCHANTMENT: RegistryType;
    static ENTITY: RegistryType;
    static FLUID: RegistryType;
    static GAME_EVENT: RegistryType;
    static ITEM: RegistryType;
    static getByKey(paramarg0: string): RegistryType;
    static getValues(): RegistryType[];
    static of(paramarg0: string): RegistryKey;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RegistryType;
    static values(): RegistryType[];
    private constructor(arg2: string)
    // private identifier: string;
    identifier(): string;
    key(): Key;
    name(): "BLOCK" | "ITEM" | "FLUID" | "ENTITY" | "GAME_EVENT" | "ENCHANTMENT" | "DAMAGE_TYPE" | "BANNER_PATTERN";
}