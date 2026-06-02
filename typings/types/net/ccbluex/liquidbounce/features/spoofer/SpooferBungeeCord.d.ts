import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class SpooferBungeeCord extends ToggleableValueGroup {
    static INSTANCE: SpooferBungeeCord;
    readonly host: string;
    modifyHandshakeAddress(original: string): string;
}