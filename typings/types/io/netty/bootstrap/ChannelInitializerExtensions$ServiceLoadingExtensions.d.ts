import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { ChannelInitializerExtensions } from '../../../io/netty/bootstrap/ChannelInitializerExtensions.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
export class ChannelInitializerExtensions$ServiceLoadingExtensions extends ChannelInitializerExtensions {
    constructor(arg0: boolean)
    // private classLoader: WeakReference<ClassLoader>;
    // private extensions: ChannelInitializerExtension[];
    // private loadAndCache: boolean;
    extensions(arg0: ClassLoader): ChannelInitializerExtension[];
}