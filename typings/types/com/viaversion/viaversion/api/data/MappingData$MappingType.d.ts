import type { RegistryKey } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MappingData$MappingType extends Enum<MappingData$MappingType> implements RegistryKey {
    static BLOCK: MappingData$MappingType;
    static ENTITY_TYPE: MappingData$MappingType;
    static ITEM: MappingData$MappingType;
    static SOUND: MappingData$MappingType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MappingData$MappingType;
    static values(): MappingData$MappingType[];
    private constructor()
    key(): Key;
    name(): "ITEM" | "BLOCK" | "SOUND" | "ENTITY_TYPE";
}