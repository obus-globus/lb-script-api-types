import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleQuickPerspectiveSwap extends ClientModule {
    static INSTANCE: ModuleQuickPerspectiveSwap;
    readonly rearView: boolean;
}