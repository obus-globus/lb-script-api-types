import type { FullMappings } from '../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingData } from '../../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { MappingData$MappingType } from '../../../../../../com/viaversion/viaversion/api/data/MappingData$MappingType.d.ts'
import type { CodecContext$RegistryAccess } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext$RegistryAccess.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { RegistryDataRewriter } from '../../../../../../com/viaversion/viaversion/api/rewriter/RegistryDataRewriter.d.ts'
import type { Key } from '../../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegistryAccessImpl extends Object implements CodecContext$RegistryAccess {
    static of(paramarg0: Protocol<any, any, any, any>): CodecContext$RegistryAccess;
    private constructor(arg0: MappingData, arg1: RegistryDataRewriter, arg2: boolean)
    constructor(arg0: Protocol<any, any, any, any>)
    // private mapped: boolean;
    // private mappingData: MappingData;
    // private registryDataRewriter: RegistryDataRewriter;
    attributeModifier(arg0: number): Key;
    blockEntity(arg0: number): Key;
    dataComponentType(arg0: number): Key;
    entity(arg0: number): Key;
    id(arg0: MappingData$MappingType, arg1: string): number;
    item(arg0: number): Key;
    // private key(arg0: FullMappings, arg1: number): Key;
    key(arg0: MappingData$MappingType, arg1: number): Key;
    // private key(arg0: string, arg1: number): Key;
    registryKey(arg0: string, arg1: number): Key;
    sound(arg0: number): Key;
    withMapped(arg0: boolean): CodecContext$RegistryAccess;
}