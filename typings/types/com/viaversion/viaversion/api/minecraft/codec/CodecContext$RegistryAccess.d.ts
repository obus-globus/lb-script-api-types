import type { MappingData$MappingType } from '../../../../../../com/viaversion/viaversion/api/data/MappingData$MappingType.d.ts'
import type { Key } from '../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CodecContext$RegistryAccess extends Object{
    attributeModifier(arg0: number): Key;
    blockEntity(arg0: number): Key;
    dataComponentType(arg0: number): Key;
    entity(arg0: number): Key;
    id(arg0: MappingData$MappingType, arg1: string): number;
    item(arg0: number): Key;
    key(arg0: MappingData$MappingType, arg1: number): Key;
    registryKey(arg0: string, arg1: number): Key;
    sound(arg0: number): Key;
    withMapped(arg0: boolean): CodecContext$RegistryAccess;
}