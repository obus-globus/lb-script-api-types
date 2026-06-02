import type { ViaManagerImpl } from '../../../com/viaversion/viaversion/ViaManagerImpl.d.ts'
import type { ViaInjector } from '../../../com/viaversion/viaversion/api/platform/ViaInjector.d.ts'
import type { ViaPlatform } from '../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { ViaPlatformLoader } from '../../../com/viaversion/viaversion/api/platform/ViaPlatformLoader.d.ts'
import type { ViaCommandHandler } from '../../../com/viaversion/viaversion/commands/ViaCommandHandler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaManagerImpl$ViaManagerBuilder extends Object {
    constructor()
    // private commandHandler: ViaCommandHandler;
    // private injector: ViaInjector;
    // private loader: ViaPlatformLoader;
    // private platform: ViaPlatform<Object>;
    build(): ViaManagerImpl;
    commandHandler(arg0: ViaCommandHandler): ViaManagerImpl$ViaManagerBuilder;
    injector(arg0: ViaInjector): ViaManagerImpl$ViaManagerBuilder;
    loader(arg0: ViaPlatformLoader): ViaManagerImpl$ViaManagerBuilder;
    platform(arg0: ViaPlatform<Object>): ViaManagerImpl$ViaManagerBuilder;
}