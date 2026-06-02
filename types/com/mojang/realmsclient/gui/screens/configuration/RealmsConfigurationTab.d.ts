import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RealmsConfigurationTab extends Object{
    onDeselected(serverData: RealmsServer): void;
    onSelected(serverData: RealmsServer): void;
    updateData(serverData: RealmsServer): void;
}