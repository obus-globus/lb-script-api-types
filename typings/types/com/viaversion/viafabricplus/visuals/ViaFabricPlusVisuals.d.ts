import type { ViaFabricPlusBase } from '../../../../com/viaversion/viafabricplus/api/ViaFabricPlusBase.d.ts'
import type { ViaFabricPlusLoadEntrypoint } from '../../../../com/viaversion/viafabricplus/api/entrypoint/ViaFabricPlusLoadEntrypoint.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ViaFabricPlusVisuals extends Object implements ViaFabricPlusLoadEntrypoint {
    static INSTANCE: ViaFabricPlusVisuals;
    static KEY: string;
    constructor()
    onPlatformLoad(arg0: ViaFabricPlusBase): void;
}