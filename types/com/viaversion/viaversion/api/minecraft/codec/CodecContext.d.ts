import type { CodecContext$RegistryAccess } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext$RegistryAccess.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CodecContext extends Object{
    isSupported(arg0: StructuredDataKey<Object>): boolean;
    mapped(): boolean;
    registryAccess(): CodecContext$RegistryAccess;
}